/**
 * Module dependencies.
 */
var express = require('express');
var router = express.Router();
var user = require('../controllers/user.controller');
var product = require('../controllers/product.controller');
var order = require('../controllers/order.controller');
// var notice = require('../controllers/notice');
// var taskCategory = require('../controllers/task_category');
// var user = require('../controllers/user');

// /*task list*/
router.post('/createUser', user.createUser);
router.post('/login', user.login);
router.get('/getProfile', user.getProfile);

router.post('/createProduct', product.createProduct)
router.get('/getProduct', product.getProduct)

router.post('/createOrder', order.createOrder)
router.get('/detailOrder', order.detailOrder)
router.post('/cancelOrder', order.cancelOrder)

module.exports = router;