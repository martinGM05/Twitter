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
        expect(userInfoList[2]).toBe('Sin Bio')
    })

    test("3) Update username", () => {
        const user = UserService.create(1, "martingm", "Martin")
        UserService.updateUserUsername(user, "mtnGM")
        expect(user.username).toBe("mtnGM")
    })

    test("4) Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "martingm1", "Martin")
        const user2 = UserService.create(1, "martingm2", "Martin")
        const user3 = UserService.create(1, "martingm3", "Martin")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("martingm1")
        expect(usernames).toContain("martingm2")
        expect(usernames).toContain("martingm3")
    })
})
