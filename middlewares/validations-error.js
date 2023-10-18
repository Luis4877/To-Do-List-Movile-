//manejo de errores
//los middleware de manejo de errores recibe 4 parametros
module.exports=function(err,request,response,next){
  
    if(err && err.error && err.error.isJoi){
      response.status(400).json({
        message:"los datos de entrada son invalidos",
        messageDev:"el middleware de validacion arrojo el siguiente error",
        code:"error en el envio de los datos",
        details:err.error.details
  
      })
    }else{
      next(err);
    }
  }
  