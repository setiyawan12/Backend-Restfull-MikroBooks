const categoryRoutes = require('express').Router()
const categoryConttroler = require('../controllers/categoryController')
const authMiddleware = require ('../helper/authMiddelware')
categoryRoutes.get('/',categoryConttroler.getCategory)
categoryRoutes.get('/:id',categoryConttroler.getCategoryById)
categoryRoutes.post('/',categoryConttroler.createCategory)
categoryRoutes.put('/:id',categoryConttroler.updateCategory)


module.exports=categoryRoutes