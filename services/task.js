const Task = require("../models/task");

exports.findAll = function () {
  return Task.findAll();
};

exports.findByid = function (id) {
  return Task.findByPk(id);
};

exports.createTask = function (data) {
  return Task.create(data);
};

exports.completeById = async function (data) {
  await Task.update(data, {
    where: {
      id,
    },
  });
};

exports.updateById = async function (id,data) {
  await Task.update(data, {
    where: {
      id,
    },
  });
};
exports.deleteById = async function (id) {
  const task = await Task.findByPk(id);
  await task.destroy();
};
