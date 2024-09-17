const promise = new Promise(function(resolve, reject){
    //do and async task
    //db call, cryptography, network
setTimeout(function(){
    //console.log('text')
    resolve() 
}, 1000)
})

promise.then(function(){
    //console.log("promise consume")
})

const pro1 = new Promise(function (resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"nilesh", pass:"123"})
        } else {
            reject('ERROR:went wrong')
        }
    }, 1000)
})

pro1.then((user) => {
//console.log(user);
return user.username
})
.then((username)=> {
    //console.log(username)
})
.catch(function(error){
    //console.log(error)
}).finally(()=> console.log("promise resolved or rejected"))
//console.log(username)



/////////////////////////////////////
const pro3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"mishra", pass:"1234"})
        } else {
            reject('ERROR:went wrong')
        }
    }, 1000)
});
async function consumepro3(){
    try {
        const response  = await pro3
    console.log(response)
    } catch (error) {
        console.log(error)
        
    }
}
//consumepro3()



///////////////////////////
//async function getallusers(){
   
//try {
  //  const response = await fetch('https://jsonplaceholder.typicode.com/users')
//const data =  await response.json()
//console.log(response)
//console.log(data)
//} catch (error) {
    //console.log("E", error)
//}
//}
//getallusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> {
    return response.json()
}) 
.then((data) =>{
    console.log(data);
})
.catch((error) => console.log("error"))


