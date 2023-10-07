const User = require('../models/users');

/*
exports.createUser = (data)=> User.create(data);
*/
exports.createUser =  function(data){
    return User.create(data); //crear un usuario en la bd
}