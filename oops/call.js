function setuser(username){
    //db calls
    this.username = username

}

function createuser(username, email, pass){
    setuser.call(this, username)

    this.email = email
    this.pass = pass
}

const chai = new createuser("chai", "abc@.com", "123")

console.log(chai)