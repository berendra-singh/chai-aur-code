// dates
let myDate=new Date()
//console.log(myDate)

console.log(myDate.toString())// date ko string me convert karke proint karne ke liye

//console.log(myDate.toJSON())

//console.log(myDate.toDateString())
//console.log(myDate.toLocaleString())
console.log(myDate.toDateString())

//let date1=new Date(2022,1,23)
//console.log(date1.toDateString())
 let date1=new Date("2022-05-17")
 console.log(date1.toLocaleString())//modify date

let myStamp=Date.now() 
console.log(myStamp)
console.log(date1.getTime())//milisecound me value ke liye

console.log(Math.floor(Date.now()/1000))// milisecound ko secound me convert me badlne ke liye

let date4=new Date()
console.log(date4)
console.log(date4.getDay())//specific cheej ke liye

console.log(date4.toLocaleString('default',{weekday:"long"}))