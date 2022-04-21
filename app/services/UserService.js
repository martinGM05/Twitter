const User = require('../models/User')

class UserService {
    static create(id, username, name){
        return new User(id, username, name, 'Sin Bio')
    }

    static getInfo(user){
        // Operator spreed
        return [user.username, user.name, user.bio]
    }

    static updateUserUsername(user, username){
        return user.username = username
    }

    static getAllUsernames(users){
        return users.map(user => user.username)
    }


}

module.exports = UserService