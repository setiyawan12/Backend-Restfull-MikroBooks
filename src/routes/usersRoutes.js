const usersRoutes = require('express').Router()
const usersConttroler = require('../controllers/detailuserController')
const authMiddleware = require ('../helper/authMiddelware')
const uploadMiddleware = require('../helper/uploadUserMiddleware')

usersRoutes.get('/',usersConttroler.viewProfileDetail)
usersRoutes.post('/',authMiddleware.checkLogin,uploadMiddleware,usersConttroler.createDetailUser)
usersRoutes.get('/all', usersConttroler.viewUser)

module.exports=usersRoutes