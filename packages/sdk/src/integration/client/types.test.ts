import * as client from '@botpress/client'
import { BaseIntegration } from '../common'
import { describe, test } from 'vitest'
import * as utils from '../../utils/type-utils'
import * as types from './types'
import { FooBarBazIntegration } from '../../fixtures'

const _mockClient = <TIntegration extends BaseIntegration>() =>
  new Proxy<types.ClientOperations<TIntegration>>({} as any, {
    get: () => {
      return async () => {
        return {}
      }
    },
  })

describe.concurrent('ClientOperations', () => {
  test('createConversation of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['createConversation']
    type General = client.Client['createConversation']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('getConversation of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['getConversation']
    type General = client.Client['getConversation']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('listConversations of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['listConversations']
    type General = client.Client['listConversations']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('getOrCreateConversation of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['getOrCreateConversation']
    type General = client.Client['getOrCreateConversation']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('updateConversation of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['updateConversation']
    type General = client.Client['updateConversation']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('deleteConversation of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['deleteConversation']
    type General = client.Client['deleteConversation']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('listParticipants of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['listParticipants']
    type General = client.Client['listParticipants']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('addParticipant of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['addParticipant']
    type General = client.Client['addParticipant']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('getParticipant of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['getParticipant']
    type General = client.Client['getParticipant']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('removeParticipant of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['removeParticipant']
    type General = client.Client['removeParticipant']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('createEvent of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['createEvent']
    type General = client.Client['createEvent']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('getEvent of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['getEvent']
    type General = client.Client['getEvent']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('listEvents of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['listEvents']
    type General = client.Client['listEvents']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('createMessage of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['createMessage']
    type General = client.Client['createMessage']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('getOrCreateMessage of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['getOrCreateMessage']
    type General = client.Client['getOrCreateMessage']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('getMessage of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['getMessage']
    type General = client.Client['getMessage']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('updateMessage of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['updateMessage']
    type General = client.Client['updateMessage']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('listMessages of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['listMessages']
    type General = client.Client['listMessages']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('deleteMessage of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['deleteMessage']
    type General = client.Client['deleteMessage']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('createUser of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['createUser']
    type General = client.Client['createUser']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('getUser of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['getUser']
    type General = client.Client['getUser']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('listUsers of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['listUsers']
    type General = client.Client['listUsers']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('getOrCreateUser of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['getOrCreateUser']
    type General = client.Client['getOrCreateUser']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('updateUser of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['updateUser']
    type General = client.Client['updateUser']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('deleteUser of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['deleteUser']
    type General = client.Client['deleteUser']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('getState of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['getState']
    type General = client.Client['getState']
    type _assertion = utils.AssertTrue<utils.IsStricterFunction<Specific, General>>
  })
  test('setState of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['setState']
    type General = client.Client['setState']
    type _assertion = utils.AssertTrue<utils.IsStricterFunction<Specific, General>>
  })
  test('getOrSetState of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['getOrSetState']
    type General = client.Client['getOrSetState']
    type _assertion = utils.AssertTrue<utils.IsStricterFunction<Specific, General>>
  })
  test('patchState of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['patchState']
    type General = client.Client['patchState']
    type _assertion = utils.AssertTrue<utils.IsStricterFunction<Specific, General>>
  })
  test('configureIntegration of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['configureIntegration']
    type General = client.Client['configureIntegration']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('uploadFile of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['uploadFile']
    type General = client.Client['uploadFile']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('upsertFile of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['upsertFile']
    type General = client.Client['upsertFile']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('deleteFile of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['deleteFile']
    type General = client.Client['deleteFile']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('listFiles of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['listFiles']
    type General = client.Client['listFiles']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('getFile of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['getFile']
    type General = client.Client['getFile']
    type _assertion = utils.AssertExtends<Specific, General>
  })
  test('updateFileMetadata of IntegrationSpecificClient extends general', () => {
    type Specific = types.ClientOperations<BaseIntegration>['updateFileMetadata']
    type General = client.Client['updateFileMetadata']
    type _assertion = utils.AssertExtends<Specific, General>
  })

  test('getMessage response should include all possible message tags', () => {
    type Actual = types.ClientOutputs<FooBarBazIntegration>['getMessage']['message']['tags']
    type Expected = {
      fooMessageTag1?: string | undefined
      fooMessageTag2?: string | undefined
      fooMessageTag3?: string | undefined
      barMessageTag1?: string | undefined
      barMessageTag2?: string | undefined
      barMessageTag3?: string | undefined
      bazMessageTag1?: string | undefined
      bazMessageTag2?: string | undefined
      bazMessageTag3?: string | undefined
    }
    type _assertion = utils.AssertTrue<utils.IsEqual<Actual, Expected>>
  })

  test('getOrCreateConversation with FooBarBazIntegration stricly enforces allowed tags', () => {
    const client = _mockClient<FooBarBazIntegration>()

    client.getOrCreateConversation({
      channel: 'channelFoo',
      tags: { fooConversationTag1: '1', fooConversationTag2: '2' },
      discriminateByTags: ['fooConversationTag1'],
    })

    client.getOrCreateConversation({
      channel: 'channelFoo',
      // @ts-expect-error only tags of the channelFoo channel can be set
      tags: { fooConversationTag1: '1', fooConversationTag2: '2', fooConversationTag4: '4' },
      discriminateByTags: ['fooConversationTag1'],
    })

    client.getOrCreateConversation({
      channel: 'channelFoo',
      tags: { fooConversationTag1: '1', fooConversationTag2: '2' },
      // @ts-expect-error only tags set in the tags object can be used to discriminate
      discriminateByTags: ['fooConversationTag3'],
    })
  })

  test('getOrCreateMessage with FooBarBazIntegration stricly enforces allowed tags', () => {
    const client = _mockClient<FooBarBazIntegration>()

    client.getOrCreateMessage({
      conversationId: '',
      userId: '',
      type: 'messageFoo',
      payload: { foo: 'foo' },
      tags: { fooMessageTag1: '1' },
      discriminateByTags: ['fooMessageTag1'],
    })

    client.getOrCreateMessage({
      conversationId: '',
      userId: '',
      type: 'messageFoo',
      payload: { foo: 'a' },
      // @ts-expect-error only tags of the channelFoo channel can be set
      tags: { fooMessageTag1: '1', fooMessageTag4: '4' },
      discriminateByTags: ['fooMessageTag1'],
    })

    client.getOrCreateMessage({
      conversationId: '',
      userId: '',
      type: 'messageFoo',
      payload: { foo: 'a' },
      tags: { fooMessageTag1: '1', fooMessageTag2: '2' },
      // @ts-expect-error only tags set in the tags object can be used to discriminate
      discriminateByTags: ['fooMessageTag3'],
    })
  })

  test('getOrCreateUser with FooBarBazIntegration stricly enforces allowed tags', () => {
    const client = _mockClient<FooBarBazIntegration>()

    client.getOrCreateUser({
      tags: { fooUserTag1: '1', fooUserTag2: '2', fooUserTag3: '3' },
      discriminateByTags: ['fooUserTag1'],
    })

    client.getOrCreateUser({
      // @ts-expect-error only defined user tags can be used
      tags: { fooUserTag1: '1', fooUserTag2: '2', fooUserTag4: '4' },
      discriminateByTags: ['fooUserTag1'],
    })

    client.getOrCreateUser({
      tags: { fooUserTag1: '1', fooUserTag2: '2' },
      // @ts-expect-error only tags set in the tags object can be used to discriminate
      discriminateByTags: ['fooUserTag3'],
    })
  })
})
