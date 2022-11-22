import { PrismaClient } from '@prisma/client'

const client = new PrismaClient()


async function main() {
  const createRes = await client.post.create({ data: {} })
  const findRes = await client.post.findFirst()


  console.log(findRes?.createdAt)
}

main()