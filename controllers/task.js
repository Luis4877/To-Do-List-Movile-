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
  const task = await insert({ UserId: 1 ,name, description });
  response.json(task);
};

//marcar como completada una tarea
exports.completeTask = async function (request, response) {
  const { id } = request.params;

  await complete(id);
  response.send('TAREA COMPLETADA');
};
//editar una tarea
exports.updateTask = async function (request, response) {
  const { name, description } = request.body;
  const { id } = request.params;
  await update(id,name,description);
  response.send("TAREA ACTUALIZADA");
};

exports.deleteTask = async function (request, response) {
  const { id } = request.params;
  console.error(id);
  await destroy(id);
  response.send("TAREA BORRADA");
};
