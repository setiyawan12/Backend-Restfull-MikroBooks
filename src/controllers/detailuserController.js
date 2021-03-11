const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const response = require('../helper/response')

module.exports = {
  viewProfileDetail: (req, res) => {
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
  createDetailUser: (req, res) => {
    let deCoded_id_users = req.decodedToken.users_id;
    const { body } = req;
    const newBody = {
      ...body,
      nik: parseInt(body.nik),
      tlp: parseInt(body.tlp),
      birth_date: new Date(body.birth_date),
      users_id: deCoded_id_users
    };
    prisma.detail_users.create({
      data: newBody
    })
      .then((data) => {
        response.success(res, "Succes Menambahkan Detail", 200, data)
      })
      .catch((error) => {
        response.error(res, 500, error)
      });
  },
  viewUser: (req, res) => {
    prisma.users
      .findMany()
      .then((data) => {
        response.success(res, "Succes Get Profile", 200, data)
      })
      .catch((error) => {
        response.error(res, 500, error)
      })
  },
}