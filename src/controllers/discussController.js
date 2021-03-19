const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports={
    creatediscuss: (req, res) => {
        let deCoded_id_users = req.decodedToken.users_id;
        const { body } = req;
        const newBody = {
          ...body,
          books_id: parseInt(body.books_id),
          id_users: deCoded_id_users
        };
        
        prisma.discuss
          .create({
            data: newBody
          })
          .then((data) => {
            res.send({
              message: "Sucsess add Discussion",
              status: 200,
              data: data,
            });
          })
          .catch((error) => {
              console.log("Error ",error);
            res.status(500).send({
              message: "failed to add discussion",
              status: 500,
              error: error,
            });
          });
      }
}