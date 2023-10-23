const express = require('express');
const UserControllers = require('./controllers/index.js')

const router = express.Router();

router.post('/', UserControllers.createUser);

router.get('/', UserControllers.getUsers);

router.get('/:email', UserControllers.getUser)

router.delete('/:email', UserControllers.deleteUser)

router.put('/:email', UserControllers.updateUser)

module.exports = router