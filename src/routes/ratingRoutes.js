const ratingRoutes = require('express').Router()
const ratingController = require('../controllers/ratingController')
const authmidleware = require('../helper/authMiddelware')

ratingRoutes.get('/',ratingController.getrating)
ratingRoutes.post('/',authmidleware.checkLogin,ratingController.createRatingbyUser)

module.exports=ratingRoutes