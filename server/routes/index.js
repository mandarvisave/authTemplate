const express = require('express');

const router = express.Router()

const userController = require('../controllers/userController')
const findUserController = require('../controllers/findUserController')

router.post('/users',userController.createUser)
router.get('/users',findUserController.findUser)

module.exports = router