const express = require('express')
const router = express.Router();

// Controller Register router
const authenticationController = require('../controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy');
const SongsController = require('../controllers/SongsController');

// route register post
router.post('/register', AuthenticationControllerPolicy.register, authenticationController.register)

// route login post
router.post('/login', authenticationController.login)


// Route get songs
router.get('/songs', SongsController.index)


// Route get songs
router.get('/songs/:songId', SongsController.show)

// Route post songs
router.post('/songs', SongsController.post)

module.exports = router;