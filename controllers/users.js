const userService = require("../services/user");

//se agrega try/catch para que el manejor de errores

exports.createUser = async function (request, response) {
  try {
    const {username, correo, password } = request.body;
    const user = await userService.createUser({username,
      correo,
      password,
    });
    response.json(user);
  } catch (error) {
    console.log("error al registrar el usuario")
    console.error(error)
    response.status(400).json("error al registrar usuario")
  }

};

exports.updateUser = async function (request, response) {
  const { username, correo,password } = request.body;
  const { id } = request.params;
  await userService.updateUser(id,username,correo,password);
  response.status(204).json({"mensaje":"Usuario actualizado con exito"});
};