import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/*
yarn prisma migrate dev --name init //run migration
npx ts-node index.ts //Run seeder
*/

async function main() {

  for(let i = 1; i <= 1; i++) {
    await prisma.user.create({
      data: {
        email: "nicolas.henry@clido.ch",
        name: "Nicolas",
        Approved: {
          create: {
            comment: "Très bien Charles.",
          },
        }
      },
    },)
    await prisma.post.create({
      data: {
        snowflake: "s9Kw83XAa,'32*dJd",
        title: "Mon premier post.",
        body: "Pourquoi les hamsters ne sont pas des cochons d'inde ?",
        published: true,
        author_id: i,
        approved_id: i,
      }
    })
  }
  /* 

  await prisma.todos.create({
    data: {
      text: "Lorem ipsum",
      done: false,
    }
  }) */

  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })