const categoryRoutes = require('express').Router()
const categoryConttroler = require('../controllers/categoryController')
const uploadMiddleware = require('../helper/uploadCategoryMiddleware')
const couldinary = require('../helper/MidlewareCouldinary/CloudinaryCategory')
categoryRoutes.get('/',categoryConttroler.getCategory)
categoryRoutes.get('/:id',categoryConttroler.getCategoryById)
categoryRoutes.post('/',uploadMiddleware,couldinary,categoryConttroler.createCategory)
categoryRoutes.put('/:id',categoryConttroler.updateCategory)


module.exports=categoryRoutes