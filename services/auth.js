const {findOneByemail} = require('./user');
const {compare,firmar} = require('./hashing');
exports.sesion = async function (registro) {
    const { correo , password} = registro;
    const user = await findOneByemail(correo);
 
    if (!user) {
     //Falta Manejo de errores
    }
    const same = await compare(password,user.password);
    if(!same){
      console.log('Contraseña incorrecta');
    }
   

    return firmar({id: user.id});
    
  
  };