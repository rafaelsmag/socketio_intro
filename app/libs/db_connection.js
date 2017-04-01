var mongoose = require('mongoose');
var connection;

module.exports = () => {
    if (!connection) {
        connection = mongoose.connect('mongodb://localhost/curso_socketio');
    }
    return connection;
}