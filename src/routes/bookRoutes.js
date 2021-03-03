const bookRoutes = require('express').Router()
const bookConttroler = require('../controllers/bookController')
const authMiddleware = require ('../helper/authMiddelware')

bookRoutes.get('/', authMiddleware.checkLogin,bookConttroler.getBooks)

module.exports = bookRoutes