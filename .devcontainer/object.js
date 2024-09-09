// singleton only one using constructor
// object literals
//object.create se singleton object bnate hai

const sym=Symbol("key1")//symbol declaration
const stn=Symbol("key2")

let user={
   name:"anuj singh",
   [sym]:"key1",//symbol ko use karna
   age:69,
   location:"kanpur",
   mail:"anujsingh798@gmail.com",
   isLoggedIn:false,
   loggedInDay:["monday","wednesday","saturday","sunday"]
}
console.log(user.mail)
// second method
console.log(user["loggedInDay"])
console.log(user[sym])// symbol ko acces karna

user.mail="beerendrasingh@gmail.com"// object VALUE change karna
console.log(user.mail)

//Object.freeze(user)// object ko lock karna taki koi change n kar paye
user.age=25
console.log(user)

user.greeting=function (){
    console.log("hy my darling")
}
user.greetingTwo=function (){
    console.log(`hy my darling,${this.name}`)
}
console.log(user.greeting())
console.log(user.greetingTwo())

//const tinderUser =new object()//singleton object
const tinderUser={}// simple object
tinderUser.id="123abc"
tinderUser.name="sam"
tinderUser.logged=false

console.log(tinderUser)


//+++++++++++++ nested object++++++++++++++++++++++++++++

const regualarUser={//nested object
  mail:"anujsingh12@gmail.com", 
  fullNAme:{
    userFullName:{
        firstName:"anuj",
        lastName:"choudhary",
    }
  } 
}
console.log(regualarUser.fullNAme.userFullName.firstName)// access nested object


const nestedObj={ // nested obj me value dena
    dob:{
        month:"july",
        year:2000,
        date:1,
        name2:{
            fatherNAme:"shivkumar singh",
            motherName:"chandra kali devi"
        }

        }
      }
      console.log(nestedObj.dob.name2.fatherNAme) //nested obj ko access karna

      //++++++++++++ object combinbe karna+++++++++++++++++++++++++++
      const obj9={1:"q",2:"b",}
      const obj8={3:"a",4:"d",}
    //  const obj10={obj8,obj9}  object ke andar another object 
      //console.log(obj10)

      const obj12={...obj8,...obj9} // mostly use and right way object combine e liye spread operator ...
      //const obj6=Object.assign({},obj8,obj9) // right way to combine two or more object

      console.log(obj12)
      // keys lene ke liye array ke form me
      console.log(Object.keys(tinderUser))// all keys array form
      console.log(Object.values(tinderUser))//all values in array form

     console.log(Object.entries(tinderUser)) // object all value and keys divided in different array
      
     console.log(tinderUser.hasOwnProperty("logged"))// specific value pta karne ke liye





      




  
