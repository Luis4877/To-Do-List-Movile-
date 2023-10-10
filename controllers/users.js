const userService = require("../services/user");

exports.createUser = async function (request, response) {
  const {username, correo, password } = request.body;
  const user = await userService.createUser({
   
    username,
    correo,
    password,
  });
  response.json(user);
};
