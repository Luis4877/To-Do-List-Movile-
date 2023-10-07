const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/users");
//crear usuario
router.get("/createUser", createUser);

//exportamos el router para poder unirlo en la aplicacion principal

module.exports = router;
