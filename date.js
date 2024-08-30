//dates
let mydate = new Date()
//console.log(mydate.toString());
//console.log(mydate.toLocaleString());
//console.log(typeof mydate);

let myDate = new Date(2024, 0 ,29)
//console.log(myDate.toDateString())

let mytimestamp = Date.now()
//console.log(mytimestamp)
//console.log(myDate.getTime())

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDate())
newDate.toLocaleString('default', {
    weekday:"long",
})

