//ES6 

class user {
    constructor(username, email, pass){
        this.username = username
        this.email = email
        this.pass = pass
    }

    encryptPassword(){
        return `${this.pass}abc`
    }
    changeuser(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user ("chai", "abc@.com", "123")
console.log(chai.encryptPassword())
console.log(chai.changeuser())



//behind the seen
