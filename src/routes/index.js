const mainRouter = require('express').Router();
const bookRoutes = require('./bookRoutes');
const authRoutes = require('./authRoutes');

mainRouter.use('/books',bookRoutes);
mainRouter.use('/auth',authRoutes);

module.exports = mainRouter;