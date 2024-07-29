//destructuring method

const {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} = require("./userController");
createUser();
deleteUser();
getUser();
updateUser();

//simple method
const userController = require("./userController");
userController.createUser();
userController.updateUser();
userController.deleteUser();
userController.getUser();
