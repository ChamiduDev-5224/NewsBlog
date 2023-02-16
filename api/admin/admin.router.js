const express = require("express");
const router = express.Router();
const { login } = require("./admin.controller");
router.get("/login", login);

module.exports = router;
