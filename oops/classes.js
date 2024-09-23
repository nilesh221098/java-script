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

//const chai = new user ("chai", "abc@.com", "123")
//console.log(chai.encryptPassword())
//console.log(chai.changeuser())



//behind the seen

function user(username, email, pass){
    this.username = username
    this.email = email
    this.pass = pass
}
user.prototype.encryptPassword = function(){
    return `${this.pass}abc`
}

const tea = new user ("chai", "abc@.com", "123")
console.log(tea.encryptPassword())
console.log(tea.changeuser())