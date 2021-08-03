import {
  makeSchema,
  asNexusMethod,
} from 'nexus'
import { PostType, QueryType, UserType } from './type'

export const schema = makeSchema({
  types: [
    PostType,
    UserType,
  ],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  contextType: {
    module: require.resolve('./context'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
})
