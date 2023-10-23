const {Usuario} = require('../../models/User.js');

async function updateUser (req, res) {
    const {name} = req.body;
    try {
        const user = await Usuario.update({name}, {
            where: {
                email: req.params.email
            }
        })
        if(user > 0) {
            res.status(200).send('Usuário atualizado com sucesso!');
        }
    } catch {
        res.status(400).send('Falha na operação');
    }

}

module.exports = updateUser