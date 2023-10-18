require("dotenv").config();

const express = require("express");
const { ConnectBD } = require("./db");
const validationError = require("./middlewares/validations-error");
ConnectBD();
const app = express();
// para que todos los middlewares puedan utilizar el request.body
app.use(express.json());
//importamos el router para poder usarlo aqui y unir todo
const taskRouter = require("./routers/task");
const usersRouter = require("./routers/users");
const authRouter = require("./routers/auth");

// unimos todos los router aqui para que funcionen
app.use(taskRouter);
app.use(usersRouter);
app.use(authRouter);
//manejo de errores
app.use(validationError);

app.listen(process.env.SERVER_PORT, function () {
  console.log(`Escuchando en el puerto ${process.env.SERVER_PORT}`);
});
