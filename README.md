# Installation
Be sure of having node and postgres installed and configured.

1. Git clone
2. Copy and rename `.env.example` to `.env`
3. Edit `.env` with your database
4. Run `yarn`
5. Run `yarn prisma migrate dev --name init`
6. Run `npx ts-node index.ts`
7. Check data created successfully