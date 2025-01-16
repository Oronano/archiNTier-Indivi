const express = require("express");
const router = express.Router();
const userController = require("../src/Controllers/userController");
const authController = require("../src/Controllers/authController");

router
    .route("/")
    .get(userController.getAllUsers)
    .post(userController.createUser);

router.route("/login").post(authController.login);

module.exports = router;
