module.exports = function(io) {
    io.sockets.on('connection', (client) => {
        client.emit('hello', {title: 'Bem vindo', msg: 'Você está conectado'});
    });
}