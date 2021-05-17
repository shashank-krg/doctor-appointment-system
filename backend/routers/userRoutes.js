const express = require('express');
const {
 
    createUser,
    authenticateUser

} = require('../controllers/userControllers');
const router = express.Router();
const Auth = require("../middlewares/auth");

router.post("/register",createUser);

router.post("/login",Auth.validateToken,authenticateUser);

module.exports = router;
