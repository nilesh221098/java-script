//object literals

const mysym = Symbol("key1")
const jsuser = {
    name:"nilesh",
    [mysym]:"mykey1",
    age: 18,
    location:"delhi",
    isloggedin: false,

}
//console.log(jsuser.name)
//console.log(jsuser["name","age"])
//console.log(jsuser[mysym])

jsuser.age = 19
//console.log(jsuser)

jsuser.greeting = function()
{
    //console.log("hello")
}
//console.log(jsuser.greeting())

jsuser.greeting2 = function()
{
    console.log(`hello user, ${this.name}`);
}
//console.log(jsuser.greeting2())

//singleton

//const user = new Object()

const tuser = {}
tuser.id = "12as"
tuser.name = "mark"
tuser.isloggedin =  false


//

const ruser = {
    email: "abc@d.com",
    fullname:{
        userfullname: {
        fname:"ab",
        lname:"cd"
    }
}
}
//console.log(user)
//console.log(ruser.fullname.userfullname.fname)
//console.log(ruser.email)
const obj1  = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}
const obj4 = {
    5: "a",
    6: "b"
}
//const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1,...obj2}
//console.log(obj3)

const users  = [
    {
    id:"3",
    name:"cd"
    },
    {
        fname:"ab",
        lname:"cd"
        }
    ]

    //(users[0].id)
    //console.log(tuser)
    //console.log(Object.keys(tuser))
    //console.log(Object.values(tuser))
    //console.log(Object.entries(tuser))
    //console.log(tuser.hasOwnProperty('isloggedin'))

    //object destructure -------
    const course = {
        cname:"hindi",
        price:"999",
        cins:"nilesh"
    }
    const {cins} = course
    //const {cins : ins} = course
    //console.log(cins)
    //console.log(ins)

    ///api onject format
   // {
       // "name::"nilesh",
       // "cname":"js";
       // "price":"free"
   // }

   // api array format
   //{
   // {}
   // {}

   //}



