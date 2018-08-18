const express = require('express');
const router = express.Router();
var baseApi =require('./collection/base');
var goodsApi =require('./collection/goods');
var customerApi =require('./collection/customer');
var reserveApi =require('./collection/reserve');

//基础
router.post('/upload/image', baseApi.uploadImg);
//商品
router.get('/goods/list', goodsApi.list);
router.post('/goods/insert', goodsApi.create);
router.post('/goods/delete', goodsApi.delete);
//客户
router.get('/customer/list', customerApi.list);
router.post('/customer/insert', customerApi.create);
router.post('/customer/delete', customerApi.delete);
//预定
router.get('/reserve/list', reserveApi.list);
router.post('/reserve/insert', reserveApi.create);
router.post('/reserve/delete', reserveApi.delete);

module.exports = router;