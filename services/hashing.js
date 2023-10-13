const bcrypt = require("bcrypt");

exports.hash =  async function(data){
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(data,salt);
}