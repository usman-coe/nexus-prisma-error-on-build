import { objectType, queryType } from "nexus"
import { Post, User } from "nexus-prisma"


export const UserType = objectType({
  name: User.$name,
  definition(t) {
    t.field(User.id)
    t.field(User.posts)
  },
})

export const PostType = objectType({
  name: Post.$name,
  definition(t) {
    t.field(Post.id)
  },
})

export const QueryType = queryType({
  definition(t) {
    t.nonNull.list.nonNull.field('users', {
      type: 'User',
      resolve(_, __, ctx) {
        return ctx.prisma.user.findMany()
      },
    })
  },
})