const mainRouter = require('express').Router();
const bookRoutes = require('./bookRoutes');
const authRoutes = require('./authRoutes');
const categoryRoutes = require('./categoryRoutes')
const usersRouters = require('./usersRoutes')
const ratingRoutes = require('./ratingRoutes')
const discussRoutes= require('./discussRoutes')
const borrowRoutes = require('./borrowRoutes')
const welcome = require('./welcome')

mainRouter.use('/',welcome)
mainRouter.use('/books',bookRoutes);
mainRouter.use('/auth',authRoutes);
mainRouter.use('/category',categoryRoutes);
mainRouter.use('/users',usersRouters);
mainRouter.use('/rating',ratingRoutes);
mainRouter.use('/discuss',discussRoutes);
mainRouter.use('/borrow',borrowRoutes);

module.exports = mainRouter;