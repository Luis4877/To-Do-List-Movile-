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
const {
  createTaskSchema,
  updateTaskSchema,
  paramsSchema,
} = require("../validations/task");
const validator = require("../middlewares/validator");
const jwtValidator = require("../middlewares/passport");
router.post(
  "/task",
  jwtValidator,
  validator.body(createTaskSchema),
  createTask
);
router.get("/task/:id", jwtValidator, validator.params(paramsSchema), getTask);
router.get("/tasks",jwtValidator, getTasks);
router.put(
  "/task/:id",
  jwtValidator,
  validator.params(paramsSchema),
  validator.body(updateTaskSchema),
  updateTask
);
router.delete(
  "/task/:id",
  jwtValidator,
  validator.params(paramsSchema),
  deleteTask
);

router.patch(
  "/task/:id",
  jwtValidator,
  validator.params(paramsSchema),
  completeTask
);

module.exports = router;
