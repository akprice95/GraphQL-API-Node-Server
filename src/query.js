import { idArg, queryType, stringArg } from 'nexus'

export const Query = queryType({
  definition(t) {
    t.field('Stat', {
      type: 'Stat',
      nullable: true,
      args: { id: idArg() },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.stat.findOne({
          where: {
            id,
          },
        })
      },
    })

    t.list.field('Stats', {
      type: 'Stat',
      args: {
        searchString: stringArg({ nullable: true }),
      },
      resolve: (parent, { searchString }, ctx) => {
        return ctx.prisma.stat.findMany({
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
