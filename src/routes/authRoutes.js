const authRoutes = require('express').Router();
const authController = require('../controllers/authController');
const authConttroler = require('../controllers/authController');
// authRoutes.post('/sign-up',authConttroler.signUp);
authRoutes.post("/sign-up", authController.signUp)
authRoutes.post('/sign-in',authConttroler.signIn)
module.exports = authRoutes