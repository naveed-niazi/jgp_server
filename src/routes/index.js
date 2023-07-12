const express = require('express');

const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const websiteRoute = require('./website.route');
const orderRoute = require('./order.route');
const wishlistRoute = require('./wishlist.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/website',
    route: websiteRoute,
  },
  {
    path: '/order',
    route: orderRoute,
  },
  {
    path: '/wishlist',
    route: wishlistRoute,
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
