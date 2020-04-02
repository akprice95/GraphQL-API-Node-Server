import { PrismaClient } from '@prisma/client'
import fs from 'fs'

const prismaClient = new PrismaClient()

const coD = fs.readFileSync('prisma/data/coD.json')

function loadStats() {
  const list = JSON.parse(coD)

  return list.map(stats => {
    return {
      data: {
        name: stats.name,
        KD: stats.KD,
        Platform: stats.Platform,
        GamerTag: stats.GamerTag,
      },
    }
  })
}

async function main() {
  try {
    const allStats = loadStats()
    for (let stats of allStats) {
      await prismaClient.stats
        .create(stats)
        .catch(err => console.error(`Error trying to generate stats `))
    }
  } catch (err) {
    console.log(err)
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prismaClient.disconnect()
  })
