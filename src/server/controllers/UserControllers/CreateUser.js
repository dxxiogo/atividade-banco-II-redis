const {Usuario} = require('../../models/User.js');
const client = require('../../database/redisConnection.js')


async function createUser (req, res) {

    try {
        const {nome, email} = req.body;
        const usuario = Usuario.build({email, nome});
        await usuario.save();
        client.setEx(req.params.email, 200, JSON.stringify(usuario));
        res.status(201).send(usuario);
    }catch(err) {
        res.status(401).send(err);
    }
}


module.exports = createUser; 