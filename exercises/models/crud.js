const User = require("./user");

const getUserById = (id) => {
  return User.findById(id).exec();
};

const getAllUsers = () => {
  return User.find({}).exec();
};

const createUser = async (userDetails) => {
  return User.create(userDetails);
};
const removeUserById = async (id) => {
  return User.findByIdAndRemove(id).exec();
};

const updateUserById = async (id, update) => {
  return User.findByIdAndUpdate(id, update, {
    new: true,
  });
};

module.exports = {
  getUserById,
  getAllUsers,
  createUser,
  removeUserById,
  updateUserById,
};
