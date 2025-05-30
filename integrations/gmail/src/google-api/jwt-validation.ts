import { google } from 'googleapis'
import { IntegrationConfig } from 'src/config/integration-config'
import { MS_IN_12_HOURS } from 'src/utils/datetime-utils'
import { GoogleOAuth2Client, GoogleCerts, LoginTicketPayload } from './types'
import * as bp from '.botpress'

const CERT_CACHE_STATE_NAME = 'googlePublicCertCache'
const ALLOWED_ISSUERS = ['https://accounts.google.com']

export class JWTVerifier {
  private readonly _oauth2Client: GoogleOAuth2Client
  private readonly _client: bp.Client
  private readonly _ctx: bp.Context
  private readonly _logger: bp.Logger

  public constructor({ ctx, client, logger }: { ctx: bp.Context; client: bp.Client; logger: bp.Logger }) {
    this._oauth2Client = new google.auth.OAuth2()
    this._client = client
    this._ctx = ctx
    this._logger = logger
  }

  public async isJWTProperlySigned(token: string): Promise<boolean> {
    try {
      return await this._verifyJWTSignature(token)
    } catch (thrown: unknown) {
      console.error("Couldn't verify JWT signature", thrown)
      return false
    }
  }

  private async _verifyJWTSignature(token: string): Promise<boolean> {
    const certificates = await this._getCertificates()
    const loginTicketPayload = await this._getLoginTicketPayload(certificates, token)

    return this._validatePayload(loginTicketPayload)
  }

  private async _getCertificates(): Promise<GoogleCerts> {
    const cachedCerts = await this._getCachedCertificates()

    return cachedCerts ?? (await this._fetchAndCacheCertificates())
  }

  private async _getLoginTicketPayload(certificates: GoogleCerts, token: string): Promise<LoginTicketPayload> {
    const requiredAudience = IntegrationConfig.getPubSubWebhookSharedSecret({ ctx: this._ctx })

    const loginTicket = await this._oauth2Client.verifySignedJwtWithCertsAsync(
      token,
      certificates,
      requiredAudience,
      ALLOWED_ISSUERS
    )

    return loginTicket.getPayload()
  }

  private _validatePayload(payload: LoginTicketPayload): boolean {
    const requiredRecipient = IntegrationConfig.getPubSubWebhookServiceAccount({ ctx: this._ctx })

    if (!payload?.email_verified || payload.email !== requiredRecipient) {
      console.error('Invalid or unverified email in JWT payload', payload?.email)
      this._logger
        .forBot()
        .error(
          'Received a webhook event with an invalid service account. Please ensure that the service account used is the same one configured in the integration settings.'
        )
      return false
    }

    return true
  }
  private async _getCachedCertificates(): Promise<GoogleCerts | null> {
    try {
      const { state } = await this._client.getState({
        type: 'integration',
        name: CERT_CACHE_STATE_NAME,
        id: this._ctx.integrationId,
      })
      return JSON.parse(state.payload.certificates)
    } catch {
      return null
    }
  }

  private async _fetchAndCacheCertificates(): Promise<GoogleCerts> {
    const { certs } = await this._oauth2Client.getFederatedSignonCertsAsync()

    await this._client.setState({
      name: CERT_CACHE_STATE_NAME,
      type: 'integration',
      expiry: MS_IN_12_HOURS,
      id: this._ctx.integrationId,
      payload: { certificates: JSON.stringify(certs) },
    })

    return certs
  }
}
