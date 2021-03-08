const mainRouter = require('express').Router();
const bookRoutes = require('./bookRoutes');
const authRoutes = require('./authRoutes');
const categoryRoutes = require('./categoryRoutes')
const usersRouters = require('./usersRoutes')
const ratingRoutes = require('./ratingRoutes')

mainRouter.use('/books',bookRoutes);
mainRouter.use('/auth',authRoutes);
mainRouter.use('/category',categoryRoutes);
mainRouter.use('/users',usersRouters);
mainRouter.use('/rating',ratingRoutes)

module.exports = mainRouter;