//array
const myarr =  [1,2,3,4,5,6,7,8,]

const myarr2 = new Array (1,2,3,4)
//console.log(myarr2[3])

// array methods

//myarr.push(6)
//myarr.pop()
//myarr.unshift(0)
//myarr.shift()

//console.log(myarr.includes(5))
//console.log(myarr.indexOf(5))

//const newarr = myarr.join()
//console.log(newarr)
//console.log(typeof newarr)

//slice splice

//console.log("A", myarr)
const myn1 = myarr.slice(1,2)
//console.log( myn1)
//console.log("b", myarr)

const myn2 = myarr.splice(1,2)
//console.log("c", myarr)
//console.log(myn2)

const m_hero = ["thor", "iman", "sman"]
const d_hero = ["sman", "flash", "bman"]

//m_hero.push(d_hero)

//console.log(m_hero[3][1])
//const all_hero = m_hero.concat(d_hero)
//console.log(all_hero);

const all_hero = [...m_hero, ...d_hero]
//console.log(all_hero);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const r_array = another_array.flat(Infinity)

//console.log(r_array)

console.log(Array.isArray("nilesh"))
console.log(Array.from("nilesh"))
console.log(Array.from({name: "nilesh"}))

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1,s2,s3))







