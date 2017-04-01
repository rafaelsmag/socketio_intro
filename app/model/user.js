var db = require('../libs/db_connection')();
var Schema = require('mongoose').Schema;

module.exports = (app) => {
    var user_schema = Schema({
        nome: { type: String, require: true},
        email: { type: String, require: true},
        nascimento: { type: String, require: true},
        celular: { type: Number, require: true},
    });

    return db.model('users', user_schema);
}