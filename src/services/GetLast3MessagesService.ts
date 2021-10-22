import prismaClient from "../prisma";

class GetLast3MessagesService {
   async execute() {
      const messages = await prismaClient.message.findMany({
         take: 3,
         orderBy: {
            created_at: "desc"
         },
         include: {
            user: true
         },
      });

      //SELECT * FROM MESSAGES  LIMIT 3 ORDER BAY CREATED_AT

      return messages;
   }
}

export { GetLast3MessagesService };