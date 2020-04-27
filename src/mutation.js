import { idArg, mutationType, stringArg, intArg } from 'nexus'

export const Mutation = mutationType({
  name: 'Mutation',
  definition(t) {
    t.crud.deleteOneStats()

    t.field('createStats', {
      type: 'Stats',
      args: {
        name: stringArg(),
        KD: stringArg(),
        GamerTag: stringArg(),
        Platform: stringArg(),
      },
      resolve: (parent, { KD, GamerTag, Platform, name }, ctx) => {
        return ctx.prisma.stats.create({
          data: {
            name,
            KD,
            GamerTag,
            Platform,
          },
        })
      },
    })

    t.field('updateStats', {
      type: 'Stats',
      args: {
        id: idArg(),
        name: stringArg(),
        KD: stringArg(),
        GamerTag: stringArg(),
        Platform: stringArg(),
      },
      resolve: (parent, { id, KD, GamerTag, Platform, name }, ctx) => {
        return ctx.prisma.stats.update({
          where: {
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
