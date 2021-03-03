const authRoutes = require('express').Router();
const authConttroler = require('../controllers/authController');
authRoutes.post('/sign-up',authConttroler.signUp);
authRoutes.post('/sign-in',authConttroler.signIn)
module.exports = authRoutes