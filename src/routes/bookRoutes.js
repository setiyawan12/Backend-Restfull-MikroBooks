const bookRoutes = require('express').Router()
const bookConttroler = require('../controllers/bookController')
const authMiddleware = require ('../helper/authMiddelware')

bookRoutes.get('/',authMiddleware.checkLogin,bookConttroler.getBooks)
bookRoutes.post('/',authMiddleware.checkLogin,bookConttroler.createbooks)
bookRoutes.delete('/:id',authMiddleware.checkLogin,bookConttroler.deleteBooks)
bookRoutes.put('/:id',authMiddleware.checkLogin,bookConttroler.updateBooks)
bookRoutes.get('/:id',authMiddleware.checkLogin,bookConttroler.getBookById)
module.exports = bookRoutes