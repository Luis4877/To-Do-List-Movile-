const Joi=require("joi")

exports.createUserSchema=Joi.object({
    username:Joi.string().pattern(/^(?=.{5,25}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/).max(25).required(),
    correo:Joi.string().max(45).email().required(),
    password:Joi.string().min(10).max(45).required()
});

