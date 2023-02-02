const express = require('express')
const UserController = require('../controllers/user.controller')
const TokenMiddleware = require('../middlewares/token.middleware')
const router = express.Router()

router.post('/user/update',TokenMiddleware, UserController.update)
router.get('/user', UserController.getAll)



module.exports = router