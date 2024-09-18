 let myname = "nilesh     "

 //console.log(myname.trim().length)
 //console.log(myname.trueLength())


let myhero = ["thor", "spi"]

let heropower = {
    thor:"hammer",
    spi:"sling",

    getspierpower:function(){
        console.log(`power is ${this.spi}`);
    }
}
Object.prototype.nilesh = function(){
    console.log(`nilesh is present in all object`)
}

Array.prototype.heynilesh = function(){
    console.log("nilesh hey!")
}
//heropower.nilesh()
//myhero.nilesh()
myhero.heynilesh()


// inheritence

const user = {
    name:"nilesh",
    email:"abc@gmail.com"
}
const teacher = {
    makevideo: true
}
const tsupport = {
    isavailable: false
}

const tasupport = {
    makeassign:'js',
    fulltime: 'time',
    __proto__:tsupport
}

teacher.__proto__ = user




// modern syntax

Object.setPrototypeOf(tsupport, teacher)

let anotheruser = "name is      "

String.prototype.trueLenth = function(){
    console.log(`$(this)`)
    console.log(this.anotheruser)
}