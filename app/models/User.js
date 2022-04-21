class User {
    constructor(id, username, name, bio){
        this.id = id;
        this.username = username;
        this.name = name;
        this.bio = bio;
        this.dateCreated = new Date()
        this.lastUpdated = new Date();
    }

    get getUsername(){
        return this.username        
    }

    get getBio(){
        return this.bio
    }

    get getDateCreated(){
        return this.dateCreated
    }

    get getLastUpdated(){
        return this.lastUpdated
    }

    set setUsername(NewUsername){
        this.username = NewUsername
    }

    set setBio(NewBio){
        this.bio = NewBio
    }

}

module.exports = User;