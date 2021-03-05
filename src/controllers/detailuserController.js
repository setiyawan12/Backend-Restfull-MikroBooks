const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const response = require('../helper/response')

module.exports = {
  viewProfile: (req, res) => {
    prisma.users
      .findMany({})
      .then((data) => {
        response.success(res, "Succes Get Profile", 200, data)
      })
      .catch((error) => {
        response.error(res, 500, error)
      })
  },
  createDetaiUser: (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const newBody = {
      ...body,
      nik: parseInt(body.nik),
      tlp: parseInt(body.tlp),
      birth_date: new Date(body.birth_date),
    };
    prisma.users
      .update({
        where: {
          id_users: parseInt(id),
        },
        data: newBody,
      })
      .then((data) => {
        response.success(res, "Succes Menambahkan Detail", 200, data)
      })
      .catch((error) => {
        response.error(res, 500, error)
      });
  }
}