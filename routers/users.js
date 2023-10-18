const express = require("express");
const router = express.Router();
const { createUser, updateUser } = require("../controllers/users");
const { createUserSchema } = require("../validations/users");
const validator = require("../middlewares/validator");
//crear usuario
router.post("/user", validator.body(createUserSchema), createUser);
router.put("/user/:id", updateUser);
//exportamos el router para poder unirlo en la aplicacion principal

module.exports = router;
