// for 

//for (let index = 0; index <= 10; index++) {
 //   const element = index;
 //   console.log(element)  
//}

//console.log()

const myarray  = [1,2,3,4,5]
for(const num of myarray){
    //console.log(num)
}

const greeting  = "hello world"
for (const gr of greeting){
    //console.log(`each char is: ${gr}`)
}

//maps

const map = new Map()
map.set('in',"india")
map.set('usa',"united s of a")
//console.log(map)

for (const key of map) {
    //console.log(key)
    
}

for (const [key, value] of map) {
    //console.log(key, ':', value)
}

//not working in object iteration
//const myobject {
//    game1:'nfs',
//    game2:'spr'
//}
//for (const [key, value] of myobject) {
//    console.log(key, ':', value)
//}

const myobject = {
    js:'javascript',
    cpp:'c++'
}
for (const key in myobject) {
    //console.log(myobject[key])
}

const pro = ["js","rb","py"]
for (const key in pro) {
    //console.log(pro[key])
}

//for each loop
//const cd = ["js", "py","java"]
//cd.forEach(function (item) {
 //   console.log(item)
//});

//cd.forEach( (item) => {
//    console.log(item)
//});

//function printMe (item){
 //   console.log(item)
//}
//cd.forEach(printMe)

//cd.forEach((item, index, arr)=> {
//    console.log(item,index,arr)
//})

//const mycd = [
//    {
//        lname:"js",
//        lfile:"jsf",
//    },
 //   {
 //       lname:"java",
//        lfile:"jsf",
//    },
//    {
  //      lname:"py",
//        lfile:"pyf",
//    }
//]
//mycd.forEach((item)=>{
 //   console.log(item.lname)
//})

//const cd = ["ja", "ruby", "java"]
//const values = cd.forEach((item) => {
    //console.log(item)
  //  return item
//})
//console.log(values)

//const mynum = [1,2,3,4,5,6,7,8,9]
//const newnum = mynum.filter((num)=> num > 4
//)
//const newnum = mynum.filter((num)=>{
//    return num > 4
//})
//console.log(newnum)

//const newnum =[]
//mynum.forEach((num) => {
//if (num > 4){
//    newnum.push(num)
//}
//})
//console.log(newnum)

//const mynum = [1,2,3,4,5,6,7,8,9]
//const newnum = mynum.map( (num) => num + 10)
//console.log(newnum)

//const newnum = mynum.map((num)=> num*10)
//.map((num)=>num+1 )
//.filter((num)=>num>=40 )
//console.log(newnum)


const mynum = [1,2,3]

//const mytotal = mynum.reduce(function(acc,curval){
//    console.log(`acc:${acc} and curval: ${curval}`)
//    return acc + curval 
//},0)
//console.log(mytotal)

//const mytotal = mynum.reduce((acc,curval)=> acc+curval,0)
   //console.log(mytotal)
    
const scart = [
    {
        itemmname:"js",
        price:"4999"
    },
    {
        itemmname:"py",
        price:"6999"
    },
    {
        itemmname:"java",
        price:"3999"
    }
]
const fprice = scart.reduce((acc, item)=> acc + item.price, 0)
console.log(fprice)
