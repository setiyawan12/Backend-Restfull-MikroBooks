const usersRoutes = require('express').Router()
const usersConttroler = require('../controllers/detailuserController')
const authMiddleware = require ('../helper/authMiddelware')

usersRoutes.get('/',usersConttroler.viewProfileDetail)
usersRoutes.post('/',authMiddleware.checkLogin,usersConttroler.createDetailUser)
usersRoutes.get('/all', usersConttroler.viewUser)



module.exports=usersRoutes