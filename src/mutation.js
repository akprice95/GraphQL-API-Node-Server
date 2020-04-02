import { idArg, mutationType, stringArg } from 'nexus'

export const Mutation = mutationType({
  name: 'Mutation',
  definition(t) {
    t.field('createStats', {
      type: 'Stats',
      args: {
        id: idArg({ nullable: false }),
        name: stringArg({ nullable: false }),
        KD: stringArg(),
        GamerTag: stringArg(),
        Platform: stringArg(),
      },
      resolve: (parent, { name, name, KD, GamerTag, Platform }, ctx) => {
        return ctx.prsma.course.create({
          Where: {
            id,
          },
          data: {
            name,
            KD,
            GamerTag,
            Platform,
          },
        })
      },
    })
  },
})
