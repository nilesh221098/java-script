const user = {
    username:"hitesh",
    logincount:8,
    signedin:true

    getUser: function(){
        console.log("got user details");
    }
}
console.log(user.username);
console.log(user.getUser());