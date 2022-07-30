const HASH_STRENGTH = 10;
const bcrypt = require('bcrypt');

// For password, we could make hashing the responsibility of the handler:
// const signupHandler = async (req, res) => {
//   let {username, password} = req.body;
//   password = await bcrypt.hash(password);
//   // This means the password has to be filled in hashed
//   const user = UserCollection.create({username, password});
// }

const userModel = (sequelize, DataTypes) => {
  const model = sequelize.define('User', {
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
  });

  // Alternatively, make hasing the the responsibility of the model
  model.beforeCreate(async (user) => {
    let hashedPassword = await bcrypt.hash(user.password, HASH_STRENGTH);
    user.password = hashedPassword;
    // Now, all the handler needs to do is call new User(username, password).create
  });

  return model;
};

module.exports = userModel;
