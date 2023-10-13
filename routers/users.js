const express = require("express");
const router = express.Router();
const { createUser,updateUser } = require("../controllers/users");
//crear usuario
router.get("/createUser", createUser);
router.get("/updateByIdUser/:id", updateUser);
//exportamos el router para poder unirlo en la aplicacion principal

module.exports = router;