const discussRoutes = require('express').Router()
const discussConttroler = require('../controllers/discussController')
const authMiddelware = require('../helper/authMiddelware')

discussRoutes.post('/',authMiddelware.checkLogin,discussConttroler.creatediscuss)

module.exports=discussRoutes
