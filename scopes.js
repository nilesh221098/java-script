//let a  = 10
//const b = 20
//var c = 300

let a = 500

if(true) {
    let a  = 10
    const b = 20
    //console.log("inner", a)
    
}

//console.log(a)
//console.log(b)
//console.log(a)


function one(){
    const username = "nilesh"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)

   // two()
}
//one()


if(true){
    const username = "nilesh"
    if(username === "nilesh"){
        const website = " youtube"
        //console.log(username + website)
    }
    //console.log(website)
}
//console.log(username)

// ========= imp intresting-----------------

//addone(5) working
function addone(num){
return num + 1
}
addone(5)

//addtwo(5) not working
const addtwo = function(num){
    return num + 3
}
addtwo(5)
