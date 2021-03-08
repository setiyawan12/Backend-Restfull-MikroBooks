const usersRoutes = require('express').Router()
const usersConttroler = require('../controllers/detailuserController')
const authMiddleware = require ('../helper/authMiddelware')

usersRoutes.get('/',usersConttroler.viewProfile)
// usersRoutes.put('/:id',usersConttroler.createDetaiUser)
usersRoutes.post('/',usersConttroler.createDetaiUser)



module.exports=usersRoutes