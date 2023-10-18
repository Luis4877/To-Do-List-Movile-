const Joi= require("joi")

exports.createTaskSchema=Joi.object({
  //  userId:Joi.number().required(),
    name:Joi.string().required(),
    description:Joi.string().min(10).max(300).required(),
})

exports.updateTaskSchema=Joi.object({
    name:Joi.string().required(),
    description:Joi.string().min(10).max(300).required(),
    status:Joi.string().valid("COMPLETE","INCOMPLETE").uppercase().default("INCOMPLETE"),
})

exports.paramsSchema=Joi.object({
    id:Joi.number().required()
})