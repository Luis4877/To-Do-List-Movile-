const express = require("express");
const router = express.Router();
const {
  getTask,
  getTasks,
  createTask,
  deleteTask,
  completeTask,
  updateTask,

} = require("../controllers/task");

router.get("/getTask/:id", getTask);
router.get("/getTasks", getTasks);
router.get("/updateById/:id", updateTask);
router.get("/deleteById/:id", deleteTask);
router.get("/createTask", createTask);
router.get("/completeTask/:id", completeTask);

module.exports = router;
