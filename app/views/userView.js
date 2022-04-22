const userService = require('./../../app/services/UserService')

class UserView {
    static createUser(payload) {
        if (payload) {
            if (payload.username && payload.name && payload.id) {
                const user = userService.create(payload.id, payload.username, payload.name)
                return {
                    name: user.name,
                    username: user.username,
                    id: user.id
                }
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