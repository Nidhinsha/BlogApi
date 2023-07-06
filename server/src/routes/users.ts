import express from "express";
const router = express.Router()

const userController = require("../controller/userController")

router.post("/user-signup", userController.userSignup)
router.post("/user-login", userController.userLogin)

module.exports = router