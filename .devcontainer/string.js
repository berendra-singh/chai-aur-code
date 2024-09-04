const name="anuj singh"
const mobNo=8318076079
//console.log(name+ mobNo)
console.log(`hello my name is ${name} and my moblile no is${mobNo}`)

const gameName=new String(`beerendra singh`)
console.log(gameName[0])
//prototyoe access ke liye
console.log(gameName.__proto__)

console.log(gameName.length)// length janne ke liye
console.log(gameName.toUpperCase())//string ko upper case ke liye
console.log(gameName.charAt(5))//index me charcter dekhne ke liye
console.log(gameName.indexOf('d'))//index dekhne ke liye


const newString=gameName.substring(0,5)
console.log(newString)

const string2=gameName.slice(-15,14)
console.log(string2)

const string3="   anujsingh    "
console.log(string3)
console.log(string3.trim())// faltu content htane ke liye only use in whitespace

const url="https://anijsingh.com/anuj%20singh"
 console.log (url.replace('%20','_'))// replace karne ke liye

 console.log(url.includes('singh'))//janne ke liye value hai ya nahi

 console.log(gameName.split(' '))// dusre type me convert karne ke liye