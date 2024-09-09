//+++++++++++++++++Array+++++++++++++++++

const arr=[0,2,4,"ram","shyam"]

const arr2=new Array(69,169,"ohh ","it","yes","baby")
console.log(arr2)


//array method
arr.push(69)// last me element jodne ke liye

arr.push(71)
console.log(arr)
arr.pop()// last element remove karne ke liye
console.log(arr)

// unshift first me add ke liye
// shift first add ke liye
console.log(arr.includes(69))// janne ke liye element hai ya nahi
console.log(arr.indexOf(69))// index janne ke liye

const newArr=arr.join()// string me badalkar join karne ke liye
console.log(newArr)
console.log(arr)

// slice , splice
const myn1=arr2.slice(1,4)//parameter ki middle vakue dene ke liye
console.log(myn1)

const myn2=arr.splice(1,5)//parameter ke one pint se dusre point tak ki value dene ke liye aur original array se value nikalne ke liye

console.log(myn2)

const heroes=["thor","ironman","spiderman"]
const dc=["superman","flash","joker"]

//heroes.push(dc)//ek array me dusra array push karne par nested ho jate hai
//console.log(heroes)

 const all_heros=heroes.concat(dc)// do array combine karne ke liye

console.log(all_heros)

const new_heros=[...heroes,...dc]// do array combine ke liye spread operator... use karte hai

console.log(new_heros)

const another_array=[1,2,3,[4,5,6],[60,4,5]]

const array_real=another_array.flat(Infinity)//multiple array ko ek me convert karne ke liye

console.log(array_real)

console.log(Array.isArray("anuj"))
console.log(Array.from("anuj"))// from change anything into array

let score=69

let score1=269
let score2=169
console.log(Array.of(score,score1,score2))//.of to convert multiple thing to aaray


