const Emailcode = require("./EmailCode");
const User = require("./User");

Emailcode.belongsTo(User);
User.hasOne(Emailcode);