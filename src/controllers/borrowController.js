const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  createBorrow: (req, res) => {
    let deCoded_id_users = req.decodedToken.users_id;
    const { body } = req;
    const newBody = {
      ...body,
      date_start: new Date(body.date_start),
      date_end: new Date(body.date_end),
      id_books: parseInt(body.id_books),
      id_users: deCoded_id_users
    };
    prisma.borrow
      .create({
        data: newBody,
      })
      .then((data) => {
        res.send({
          message: "Success Borrow",
          status: 200,
          data: data,
        });
      })
      .catch((error) => {
        res.send({
          message: "Error While Borrow",
          status: 500,
          error: error,
        });
      });
  },
  getBorrow: (req, res) => {
    
    prisma.borrow
      .findMany({
        include: {
          books: {
            include: {
              users: {
                select: {
                  username: true,
                },
              },
            },
          },
          users: {
            select: {
              username: true,
            },
          },
        },
      })
      .then((data) => {
        res.send({
          message: "Success Get Borrow",
          status: 200,
          data: data,
        });
      })
      .catch((error) => {
        res.send({
          message: "Failed While Get Borrow",
          status: 500,
          error: error,
        });
      });
  },
};