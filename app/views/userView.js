const useService = require('./../../app/services/UserService')

class UserView {
    static createUser(payload) {
        if (payload) {
            if (payload.username && payload.name && payload.id) {
                return {msg: 'test'}
            }else{
                return {
                    error: "necesitan tener un valor válido"
                }
            }
        } else {
            return {
                error: 'payload no existe'
            }
        }
    }
}

module.exports = UserView