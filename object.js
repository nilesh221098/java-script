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
    console.log("hello")
}
console.log(jsuser.greeting())

jsuser.greeting2 = function()
{
    console.log(`hello user, ${this.name}`);
}
console.log(jsuser.greeting2())

