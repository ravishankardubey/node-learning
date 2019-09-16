const path = require('path');

const express = require('express');

const prodcutsController = require('../controllers/products');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', prodcutsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', prodcutsController.posAddProduct);

module.exports = router;