const useService = require('./../../app/services/UserService')

class UserView {
    static createUser(payload) {
        if (payload) {
            return useService.create(payload)
        } else {
            return {
                error: 'payload no existe'
            }
        }
    }
}

module.exports = UserView