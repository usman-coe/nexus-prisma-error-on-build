import { makeSchema, objectType } from 'nexus'
import { Post } from 'nexus-prisma'
import './generated/nexus'

export const schema = makeSchema({
  types: [
    objectType({
      name: Post.$name,
      definition(t) {
        t.field(Post.id)
      },
    }),
  ],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
})
