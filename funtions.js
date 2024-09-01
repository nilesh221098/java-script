
function myname(){
console.log("n")
console.log("i")
console.log("l")
console.log("e")
console.log("s")

}
//myname()
function addno(no1, no2){
    //console.log(no1 + no2) 
    let result = no1 + no2
    return result
}

function addnumber(no1, no2){
   
    return no1+no2
}
//addno(3,5)
//addno(3,"5")
//addno(3,"s")
//addno(3,null)
const result = addnumber(4,5)
//console.log("result:", result)

//function loginusermsg(username){
//    if (username === undefined){
//console.log("enter a username")
//return
//    }
//    return `${username} just logged in`
//}

function loginusermsg(username = "SAM"){
    if (!username){
console.log("enter a username")
return
    }
   
    return `${username} just logged in`
}

//console.log(loginusermsg("nilesh"))
//console.log(loginusermsg())

//function calcartprice(no1){
//    return no1
//}

//function calcartprice(...no1){
//    return no1
//}

function calcartprice(val1, val2, ...no1){
    return no1
}
//console.log(calcartprice(200))
//console.log(calcartprice(200,300,400))
const anyobj = {
    name:"nilesh",
    price:"299"
}
function handleobj(anyobj){
   console.log(`user name is ${anyobj.name} and price is ${anyobj.price}`)
}
//handleobj(anyobj)

handleobj({
    name:"nilesh",
    price:"298"
    
})


const mynewarray = [300,200,400]

function returnsecondvalue(getarray){
    return getarray[1]
}
//console.log(returnsecondvalue(mynewarray))
console.log(returnsecondvalue([300,200,400]))