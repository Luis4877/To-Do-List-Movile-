const userService = require("../services/user");

exports.createUser = async function (request, response) {
  const { name, username, correo, password } = request.body;
  const user = await userService.createUser({
    name,
    username,
    correo,
    password,
  });
  response.json(user);
};
