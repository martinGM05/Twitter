const UserService = require('./../../app/services/UserService')

describe("Tests for UserServices", () => {
    test("1) Create a new user using the UserServices", () => {
        const user = UserService.create(1, "martingm", "Martin")
        expect(user.username).toBe("martingm")
        expect(user.name).toBe("Martin")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

    test("2) Get all user data in a list", () => {
        const user = UserService.create(1, "martingm", "Martin")
        const userInfoList = UserService.getInfo(user)
        expect(userInfoList[0]).toBe('martingm')
        expect(userInfoList[1]).toBe('Martin')
        expect(userInfoList[2]).toBe('Son Bio')
    })
})
