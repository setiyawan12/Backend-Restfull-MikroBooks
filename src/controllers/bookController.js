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
  createbooks: (req, res) => {
    const { body } = req;
    const newBody = {
      ...body,
      isbn: parseInt(body.isbn),
      pages: parseInt(body.pages),
      category_id: parseInt(body.category_id),
      users_id: parseInt(body.users_id),
      discuss_id: parseInt(body.discuss_id),
      rating_id: parseInt(body.rating_id),
    };
    prisma.books
      .create({
        data: newBody
      })
      .then((data) => {
        response.success(res, "Success Menambahkan Buku", 200, data)
      })
      .catch((error) => {
        response.error(res, 500, error)
      })
  },
  deleteBooks: (req, res) => {
    const { id } = req.params;
    prisma.books
      .delete({
        where: {
          id_books: parseInt(id),
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
    const { id } = req.params;
    const { body } = req;

    const newBody = {
      ...body,
      isbn: parseInt(body.isbn),
      pages: parseInt(body.pages),
      category_id: parseInt(body.category_id),
      users_id: parseInt(body.users_id),
      discuss_id: parseInt(body.discuss_id),
      rating_id: parseInt(body.rating_id),
    };
    prisma.books
      .update({
        where: {
          id_books: parseInt(id),
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
        response.success(res, "Success Get Data Books By Id", 200, data)
      })
      .catch((error) => {
        response.error(res, 500, error)
      });
  },
}