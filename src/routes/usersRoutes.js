const usersRoutes = require('express').Router()
const usersConttroler = require('../controllers/detailuserController')
const authMiddleware = require ('../helper/authMiddelware')
const uploadMiddleware = require('../helper/uploadUserMiddleware')
const cloudinary = require('../helper/MidlewareCouldinary/CloudinaryUser')

usersRoutes.get('/',usersConttroler.viewProfileDetail)
usersRoutes.post('/',authMiddleware.checkLogin,uploadMiddleware,cloudinary,usersConttroler.createDetailUser)
usersRoutes.get('/all', usersConttroler.viewUser)

module.exports=usersRoutes