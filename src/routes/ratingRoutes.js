const ratingRoutes = require('express').Router()
const ratingController = require('../controllers/ratingController')

ratingRoutes.get('/',ratingController.getrating)
ratingRoutes.post('/',ratingController.createRating)

module.exports=ratingRoutes