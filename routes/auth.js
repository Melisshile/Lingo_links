//import
const express = require('express');

//variables registerUser and loginUser which are going to be functions that will be fetched from controllers folder
const {registerUser, loginUser} = require('../controllers/authController');

//routing or directing our request
const router = express.Router();

//first router; user registration which is the sign up
router.post('/register', registerUser);

//second router; user log in
router.post('/login', loginUser);

//make it accessible
module.exports = router;