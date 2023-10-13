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
const {createTaskSchema,updateTaskSchema,paramsSchema}=require("../validations/task");
const validator=require("../middlewares/validator")

router.get("/task/:id",validator.params(paramsSchema), getTask);
router.get("/tasks", getTasks);
router.put("/task/:id",validator.params(paramsSchema),validator.body(updateTaskSchema), updateTask);
router.delete("/task/:id",validator.params(paramsSchema), deleteTask);
router.post("/task",validator.body(createTaskSchema), createTask);
router.patch("/task/:id",validator.params(paramsSchema) ,completeTask);

module.exports = router;
