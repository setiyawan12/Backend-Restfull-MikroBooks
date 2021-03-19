const borrowRoutes = require("express").Router();
const borrowController = require('../controllers/borrowController')
const authMiddelware = require('../helper/authMiddelware')

borrowRoutes.post('/',authMiddelware.checkLogin,borrowController.createBorrow)
borrowRoutes.get('/',borrowController.getBorrow)

module.exports=borrowRoutes