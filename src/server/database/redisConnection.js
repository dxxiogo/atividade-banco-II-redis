const redis = require('redis');

let client = redis.createClient();

async function connectRedis () {
    await client.connect();
    client.on('error', err => {
        console.log('Erro: ' + err);
    })
    console.log('Conectado com os redis')
}

connectRedis();

module.exports = client;