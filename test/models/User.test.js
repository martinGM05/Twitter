const User = require('../../app/models/User')

describe("Unit testing for User Class", () => {
    test('1) Requerimiento 1: Create an User object' , () => {
        const user = new User(1, 'martinGM05', 'Martin', 'Bio')

        expect(user.id).toBe(1)
        expect(user.username).toBe('martinGM05')
        expect(user.name).toBe('Martin')
        expect(user.bio).toBe('Bio')

    })

    test('2) Requerimiento 2: Fechas en atributos de User' , () => {
        const user = new User(1, 'martinGM05', 'Martin', 'Bio')

        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })

    test('3) Requerimiento 3: Cada objeto tipo User necesita Getters' , () => {
        const user = new User(1, 'martinGM05', 'Martin', 'Bio')

        expect(user.getUsername).toBe('martinGM05')
        expect(user.getBio).toBe('Bio')
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })

    test('4) Requerimiento 4: Cada objeto tipo User necesita Setters', () =>{
        const user = new User(1, 'martinGM05', 'Martin', 'Bio')
        user.setUsername = "GM05"
        expect(user.username).toBe('GM05')

        user.setBio = "New Bio"
        expect(user.bio).toBe("New Bio")
    })
})