const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const response = require('../helper/response')

module.exports = {
  getBooks: (req, res) => {
    prisma.books.findMany({
      include: {
        category: {
          select: {
            category_name: true,
          }
        },
        users:{
          select:{
            username:true,
          }
        },
        borrow:{
          select:{
            id_borrow:true
          }
        },
        discuss:{
          select:{
            diskusi:true
          }
        }
      }
    })
      .then((data) => {
        response.success(res, "Success Get Data Buku", 200, data)
      })
      .catch((error) => {
        response.error(res, 500, error)
      })
  },
  createbooksUsers: (req,res)=>{
    let deCoded_id_users = req.decodedToken.users_id;
    const {body} = req
    const newBody={
      ...body,
      users_id: deCoded_id_users,
      isbn: parseInt(body.isbn),
      pages: parseInt(body.pages),
      category_id: parseInt(body.category_id),
      cover_books: req.image.url
    };
    prisma.books
    .create({
      data: newBody,
    })
    .then((data) => {
      res.send({
        message: "Data Books Success Upload",
        status: 200,
        data: data,
      });
    })
    .catch((err) => {
      res.send({ message: "Error While Add data", status: 500, error: err });
    });
  },
  deleteBooks: (req, res) => {
    const { id } = req.params;
    let deCoded_id_users = req.decodedToken.users_id;
    prisma.books
      .deleteMany({
        where: {
          id_books: parseInt(id),
          users_id:deCoded_id_users
        },
      })
      .then((data) => {
        response.success(res, "Success Delete Books", 200, data)
      })
      .catch((error) => {
        response.error(res, 500, error)
      });
  },
  updateBooks: (req, res) => {
    let deCoded_id_users = req.decodedToken.users_id;
    const { id } = req.params;
    const { body } = req;
    const newBody = {
      ...body,
      isbn: parseInt(body.isbn),
      pages: parseInt(body.pages),
      category_id: parseInt(body.category_id),
    };
    prisma.books
      .updateMany({
        where: {
          id_books: parseInt(id),
          users_id:deCoded_id_users
        },
        data: newBody,
      })
      .then((data) => {
        response.success(res, "Success Update Books", 200, data)
      })
      .catch((error) => {
        response.error(res, 500, error)
      });
  },
  getBookById: (req, res) => {
    const { id } = req.params;
    prisma.books
      .findUnique({
        where: {
          id_books: parseInt(id),
        },
      })
      .then((data) => {
        res.send({
          message: "Sucess",
          status: 200,
          data: data,
        });
      })
      .catch((error) => {
        response.error(res, 500, error)
      });
  },
  getBooksByUser: (req, res) => {
    let deCoded_id_users = req.decodedToken.users_id;
    console.log("id user", deCoded_id_users);
    prisma.books
      .findMany({
        where: {
          users_id: deCoded_id_users,
        },
        include: {
          category: {
            select: {
              category_name: true,
            }
          },
          users:{
            select:{
              username:true,
            }
          }
        }
      })
      .then((data) => {
        res.send({
          message: "Sucess",
          status: 200,
          data: data,
        });
      })
      .catch((error) => {
        res.send({
          message: "Error While Get Books",
          status: 500,
          error: error,
        });
      });
  },
}