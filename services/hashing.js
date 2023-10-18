
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.hash =  async function(data){
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(data,salt);
}


exports.compare = async function(text,hash){
    return bcrypt.compare(text, hash);
}

exports.firmar = function (payload){
    console.log('JWT_SECRET');
    return jwt.sign(payload,process.env.JWT_SECRET);
}