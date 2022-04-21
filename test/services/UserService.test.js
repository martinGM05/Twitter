const UseService = require('./../../app/services/UserService')

describe("Tests for UserServices", () => {
    test("1. Create a new user using the UserServices", () => {
        const user = UserServices.create(1, "martingm", "Martin")
        expect(user.username).toBe("martingm")
        expect(user.name).toBe("Martin")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
})