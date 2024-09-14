//+++++++++++++++++++++++++++function basic++++++++++++++++++++++++++++++++++++++++

function sayMyName(){
    console.log("anuj")
    console.log("singh")
}
sayMyName()

function addNumber(num1,num2){
   // let num3=num1+num2
    //console.log(num3)
    return num1+num2 
}
//addNumber(67,2)
const result= addNumber(60,9)
console.log("result:",result)

function userLoggin(userName="anuj"){// default value in parameter
    if(userName===undefined){
        console.log("please inter a userName")
        return


    }
    return `${userName} just logged in`
}
 console.log(userLoggin())

 // shopping cart function parameter 
   function calculatePrice(...num1){ //...rest operator unlimited parameter ke liye
     return num1
   }
   console.log(calculatePrice(69,169,300,250))

   const user={
    user2:"beerendra",
    Price:69,
   }
  // console.log(user.user2)

   function getUser(user){  // object ko function me use karna
    console.log(`userName is ${user.user2} and price is ${user.Price}`)

   }
   getUser(user)
     //getuser({ aise bi acces kar sKTE HAI
   //user2:"beerendra",
   //price:399
 // })

 const arr=[1,2,3,4,5]
  function returnArrValue(getArray){ // array access kaerna function me
    return getArray[2]

  }
  //console.log(returnArrValue(arr))
  console.log(returnArrValue([200,300,69,34,54]))// aise hi direct value de sakte hai

   





