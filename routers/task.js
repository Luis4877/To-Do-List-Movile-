const express = require("express");
const router = express.Router();
const { getTask, createTask, getTasks } = require("../controllers/task");
const { updateById, deleteById, completeById } = require("../services/task");
router.get("/getTask/:id", getTask);
router.get("/getTasks", getTasks);
router.get("/updateById/:id", updateById);
router.get("/deleteById/:id", deleteById);
router.get("/createTask", createTask);
router.get("/completeTask/:id", completeById);

module.exports = router;
