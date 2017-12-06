'use strict'

const uuidv4 = require('uuid/v4');
const bcrypt = require('bcrypt');
const saltRounds = 8;

class User {

    hashPassword (plainPassword) {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(plainPassword, salt);
        return hash;
    }

    assignUid () {
        return uuidv4();        
    }

    constructor (username = '', roles = '', plainPassword = '', id = null, passwordHash = null ) {
        this.id = id || this.assignUid();
        this.username = username;
        this.roles = roles;
        this.plainPassword = plainPassword = '';
        this.passwordHash = passwordHash || this.hashPassword(this.plainPassword);   
    }  

    create () {
        console.log({id: this.id, username: this.username, roles: this.roles, password: this.passwordHash });
    }  
};

module.exports = User;
