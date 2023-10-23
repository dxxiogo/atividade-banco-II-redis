const {Usuario} = require('../../models/User.js');
const client = require('../../database/redisConnection.js')

async function getUser (req, res) {
    let usuario = null;
    try {
        usuario = await client.get(req.params.email);
        if(usuario)
            console.log('pegou o cache')
            res.status(200).send(usuario);
        usuario = await Usuario.findOne({ where: { email: req.params.email } });
        if (usuario) 
            console.log('fez a requisição')
            client.setEx(req.params.email, 200, JSON.stringify(usuario));
            res.status(200).send(usuario);
    } catch {
        res.status(404).send('User not found!')
    }
}

async function getUsers (req, res) {
    let users = null;
    try{
        users = await client.get('users');
        if(users)
            console.log('pegou o cache')
            res.status(200).send(users);
        users = await Usuario.findAll();
        console.log('fez a requisição')
        //client.setEx('users', 100, JSON.stringify(users));
        res.status(200).send(users);
    } catch(err) {
        res.send(err);
    }
}



module.exports = {getUser, getUsers}