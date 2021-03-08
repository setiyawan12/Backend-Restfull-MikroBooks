const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const response = require('../helper/response')

module.exports = {
  viewProfile: (req, res) => {
    prisma.
    detail_users
      .findMany({
        include:{
          users:true
        }
      })
      .then((data) => {
        response.success(res, "Succes Get Profile", 200, data)
      })
      .catch((error) => {
        response.error(res, 500, error)
      })
  },
  createDetaiUser: (req, res) => {
    const { body } = req;
    const newBody = {
      ...body,
      nik: parseInt(body.nik),
      tlp: parseInt(body.tlp),
      birth_date: new Date(body.birth_date),
      users_id: parseInt(body.users_id)
    };
    // prisma.detail_users
    //   .update({
    //     where: {
    //       users_id: parseInt(id),
    //     },
    //     data: newBody,
    //   })
    prisma.detail_users.create({
      data: newBody
    })
      .then((data) => {
        response.success(res, "Succes Menambahkan Detail", 200, data)
      })
      .catch((error) => {
        response.error(res, 500, error)
      });
  }
}