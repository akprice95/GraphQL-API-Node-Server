import { objectType } from 'nexus'

const Stats = objectType({
  name: 'Stats',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.GamerTag()
    t.model.KD()
    t.model.Platform()
  },
})

export const Models = [Stats]
