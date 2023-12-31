const User = require("../models/users");
const { hash } = require("./hashing");
/*
exports.createUser = (data)=> User.create(data);
*/
exports.createUser = async function (data) {
  data.password = await hash(data.password);
  console.log("USUARIO CREADO", data);
  const user = await User.create(data); //crear un usuario en la bd
  delete user.dataValues.password;
  return user;
};

exports.updateUser = async function (id, username, correo, password) {
  const datos = await User.findByPk(id);
  await datos.update({ username, correo, password });
};




exports.findOneByemail= function(correo){
 
  const usuario = User.findOne({
    where:{
      correo,
    }
  })
  console.error(usuario,'Usuario que encuentra por el correo');
  return usuario;
};


exports.findOneById =  function(id){
  return User.findByPk(id);
}

