const Task = require("../models/task");

exports.findAll = function (id){
  return Task.findAll({
    where:{
      id,
    }
  });
};

exports.findById = function (id) {
  
  return Task.findByPk(id);
};

exports.insert = function (data) {
  return Task.create(data);
};

exports.complete = async function (id) {
 const task = await Task.findByPk(id);
 await task.update({status:"COMPLETE"},{
  where:{
    id
  }
 })

};

exports.update = async function (id,name,description) {

  const datos = await Task.findByPk(id);
  await datos.update({name,description},{
    where:
    id
  });
};


exports.destroy = async function (id) {
 
  const task =   await Task.findByPk(id);
   await  task.destroy();
};
