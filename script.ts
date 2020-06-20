import { PrismaClient as PrismaClient1 } from './generated/client1'
import { PrismaClient as PrismaClient2 } from './generated/client2'

const prisma1 = new PrismaClient1()
const prisma2 = new PrismaClient2()

// A `main` function so that you can use async/await
async function main() {
  // ... you will write your Prisma Client queries here
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    // await prisma1.disconnect()
    // await prisma2.disconnect()
  })
