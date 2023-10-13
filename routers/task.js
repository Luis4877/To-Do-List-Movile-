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

router.get("/task/:id", getTask);//get
router.get("/tasks", getTasks);//get
router.get("/task/:id", updateTask);
router.delete("/task/:id", deleteTask);
router.put("/task", createTask);//
router.put("/task/:id", completeTask);

module.exports = router;
/*
get-Obtener informacion
post-crear informacion 
put-reemplazar informacion
patch-actualizar parcialmente informacion
delete:eliminar informacion 
*/