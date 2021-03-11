const categoryRoutes = require('express').Router()
const categoryConttroler = require('../controllers/categoryController')
const authMiddleware = require ('../helper/authMiddelware')
const uploadMiddleware = require('../helper/uploadCategoryMiddleware')
categoryRoutes.get('/',categoryConttroler.getCategory)
categoryRoutes.get('/:id',categoryConttroler.getCategoryById)
categoryRoutes.post('/',uploadMiddleware,categoryConttroler.createCategory)
categoryRoutes.put('/:id',categoryConttroler.updateCategory)


module.exports=categoryRoutes