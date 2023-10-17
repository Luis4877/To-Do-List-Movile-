const { sesion } = require("../services/auth");

exports.login = async function (request, response) {
  const { correo, password } = request.body;
  console.log("Antes de entrar xd");
  try {
    const token = await sesion({ correo, password });
   
    response.status(200).json({ token });
  } catch (error) {
    response.status(401).json({
      error: error.message,
      messageDev:"no se encontro usuario por correo o la contraseña es incorrecta",
      code:"UIoCI",
    });
  }
};
