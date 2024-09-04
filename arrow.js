const user = {
    usrename:"nilesh",
    price:999,

    welcomemessage: function(){
       // console.log(`${this.usrename} , welcome to website `)
        //console.log(this)
    }

}
//user.welcomemessage()
//user.usrename = "sam"
//user.welcomemessage()
//console.log(this)


//function chai(){
  //  let username = "nilesh"
   // console.log(this.username)
//}
//chai()

//const chay = function(){
 //   let username = "nilesh"
  //  console.log(this.username)
//}
//chay()

//const chay = () => {
//    let username = "nilesh"
 //   console.log(this.username)
//}
//chay()


//const addtwo = (num1, num2) => {
  //  return num1 + num2
//}
//console.log(addtwo(3,5))


//const addtwo = (num1, num2) =>  num1 + num2
//const addtwo = (num1, num2) =>  (num1 + num2)
const addtwo = (num1, num2) =>  ({username: "nilesh"})
//console.log(addtwo(3,5))

//const myarray = [1,2,3,4,5,6]

//myarray.forEach()


//immediately invoked function expression (IIFE) ----

//function chai(){
//    console.log(`DB connected`)
//}
//chai()

(function chai(){
    //named IIFE
      // console.log(`DB connected`)
    })();

( () => {
    //unnamed IIFE
          //console.log(`DB connected 2`)
        })();


( (name) => {
    //with parametr IIFE
     //console.log(`DB connected 2 ${name}`)
         })('nilesh')

         ( (name) => {
    //with parametr IIFE
     //console.log(`DB connected 2 ${name}`)
         })('nilesh')








   
    





