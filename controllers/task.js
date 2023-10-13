const {
  findAll,
  findById,
  insert,
  complete,
  update,
  destroy,
} = require("../services/task");

//obtener solo una tarea
exports.getTask = async function (request, response) {
  const { id } = request.params;
  const task = await findById(id);
  response.status(200).json(task);
};

//obtener todas las tareas
exports.getTasks = async function (request, response) {
  const task = await findAll();
  response.status(200).json(task);
};

//crear una tarea
exports.createTask = async function (request, response) {
  const { name, description} = request.body;
  const task = await insert({ UserId: 1 ,name, description });
  response.status(201).json(task);
};

//marcar como completada una tarea
exports.completeTask = async function (request, response) {
  const { id } = request.params;

  await complete(id);
  response.status(204).end();
};
//editar una tarea
exports.updateTask = async function (request, response) {
  const { name, description } = request.body;
  const { id } = request.params;
  await update(id,name,description);
  response.status(204).end();
};

exports.deleteTask = async function (request, response) {
  const { id } = request.params;
  console.error(id);
  await destroy(id);
  response.send("TAREA BORRADA");
};
