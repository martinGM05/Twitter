const User = require('../../app/models/User')

describe("Unit testing for User Class", () => {
    test('1) Create an User object' , () => {
        const user = new User(1, 'martinGM05', 'Martin', 'Bio', 'dateCreated', 'lastUpdated')

        expect(user.id).toBe(1)
        expect(user.username).toBe('martinGM05')
        expect(user.name).toBe('Martin')
        expect(user.bio).toBe('Bio')
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()

    })
})