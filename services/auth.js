const {findOneByemail} = require('./user');
const {compare,firmar} = require('./hashing');
exports.sesion = async function (registro) {
    const { correo , password} = registro;
    const user = await findOneByemail(correo);

    if (!user) {
     throw new Error("Usuario o contraseña incorrectos");
    }
    const same = await compare(password,user.password);
    if(!same){
      throw new Error("contraseña incorrecta");
    }
  

    return firmar({id: user.id});
    
  
  };