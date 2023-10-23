const {Usuario} = require('../../models/User.js');

async function deleteUser(req, res) {
    try {
        await Usuario.destroy({where:{
            email: req.params.email
        }})  
        res.status(200).send('Usário removido com sucesso!');  
    } catch {
        res.status(404).send('Usuário não encontrado!')
    }
}

module.exports = deleteUser;