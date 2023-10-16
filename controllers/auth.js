const { sesion } = require("../services/auth");

exports.login = async function (request, response) {
  const { correo, password } = request.body;
  console.log("Antes de entrar xd");
  try {
    const token = await sesion({ correo, password });
   
    response.status(200).json({ token });
  } catch (error) {
    response.status(400).json({
      error: "No se pudo iniciar sesion correctamente",
    });
  }
};
