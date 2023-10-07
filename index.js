require("dotenv").config();

const express = require("express");
const {ConnectBD} = require('./db');
ConnectBD();
const app = express();
// para que todos los middlewares puedan utilizar el request.body
app.use(express.json());
//importamos el router para poder usarlo aqui y unir todo
const taskRouter = require("./routers/task");
const usersRouter = require("./routers/users");
// unimos todos los router aqui para que funcionen
app.use(taskRouter);
app.use(usersRouter);


app.listen(process.env.SERVER_PORT, function () {
  console.log(`Escuchando en el puerto ${process.env.SERVER_PORT}`);
});
