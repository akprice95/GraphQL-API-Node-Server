import { idArg, queryType, stringArg } from 'nexus'

export const Query = queryType({
  definition(t) {
    t.field('Stat', {
      type: 'Stats',
      nullable: true,
      args: { id: idArg() },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.stats.findOne({
          where: {
            id,
          },
        })
      },
    })

    t.list.field('Stats', {
      type: 'Stats',
      resolve: (parent, arg, ctx) => {
        return ctx.prisma.stats.findMany()
      },
    })

    t.list.field('filterStat', {
      type: 'Stats',
      args: {
        searchString: stringArg({ nullable: true }),
      },
      resolve: (parent, { searchString }, ctx) => {
        return ctx.prisma.stats.findMany({
          where: {
            OR: [
              { name: { contains: searchString } },
              { KD: { contains: searchString } },
              { GamerTag: { contains: searchString } },
              { Platform: { contains: searchString } },
            ],
          },
        })
      },
    })
  },
})
