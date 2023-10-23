const deleteUser = require('./UserControllers/DeleteUser');
const createUser = require('./UserControllers/CreateUser');
const updateUser = require('./UserControllers/UpdateUser');
const {getUser, getUsers} = require('./UserControllers/GetUser')

module.exports = UserControllers = {
    deleteUser,
    createUser,
    updateUser,
    getUser,
    getUsers
}