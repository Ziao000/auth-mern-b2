const express = require('express')
const ShopController = require('../controllers/shop.controller')
const TokenMiddleware = require('../middlewares/token.middleware')
const router = express.Router()

router.post('/shops', TokenMiddleware, ShopController.create)
router.get('/shops', ShopController.getAll)
router.get('/shops/:id', ShopController.getOne)

module.exports = router