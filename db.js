const { connect,sync } = require("./models/data");
const User = require("./models/users");

const Task = require("./models/task");

//relaciones de las tablas

exports.ConnectBD = async function () {
  //Un usuario crea muchas tareas pero una tarea solo puede ser creada por 1 usuario
  User.hasMany(Task);
  Task.belongsTo(User);

  await connect();
  await sync();
};
