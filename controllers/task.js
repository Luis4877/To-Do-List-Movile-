const {
  findAll,
  findByid,
  createTask,
  deleteById,
  completeById,
  updateById,
} = require("../services/task");

//obtener solo una tarea
exports.getTask = async function (request, response) {
  const { id } = request.params;
  const task = await findByid(id);
  response.json(task);
};

//obtener todas las tareas
exports.getTasks = async function (request, response) {
  const task = await findAll();
  response.json(task);
};

//crear una tarea
exports.createTask = async function (request, response) {
  const { name, description} = request.body;
  const task = await createTask({ UserId: 1 ,name, description });
  response.json(task);
};

//marcar como completada una tarea
exports.completeTask = async function (request, response) {
  const { status } = request.body;
  const { id } = request.params;

  await completeById(id, { status });
};
//editar una tarea
exports.updateTask = async function (request, response) {
  const { name, description } = request.body;
  const { id } = request.params;
  await updateById(id, { name, description });
  response.send("TAREA ACTUALIZADA");
};

exports.deleteTask = async function (request, response) {
  const { id } = request.params;
  await deleteById(id);
  response.send("Publicacion Borrada");
};
