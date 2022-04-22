const useService = require('./../../app/services/UserService')

class UserView {
    static createUser(payload) {
        if (payload) {
            const user = useService.create(payload.id, payload.username, payload.name)
            return {
                user: user,
            }
        } else {
            return {
                error: 'payload no existe'
            }
        }
    }
}

module.exports = UserView