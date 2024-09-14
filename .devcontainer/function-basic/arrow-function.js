// arrow function
const user={
    name:"anuj",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.name} , welcome to website`)
        console.log(this) // curent value 
    }
}
user.welcomeMessage()
//user.name="beerendra"
//user.welcomeMessage()// this keyword cureent context ke liye

//function chai(){
 //   let nickName="anuj"
  //  console.log(this.nickName)
//console.log(this)
//}
//chai()

// +++++++++++++arrow function+++++++++++
const chai=() =>{
    let nickName="anuj singh"
    price=69
    console.log(this)
}

 // const sumTwo=(num1,num2)=>num1+num2
 const sumTwo=(num1,num2)=>(num1+num2)
  console.log(sumTwo(34,35))

  //js me arrow function ke through object return karne ke liye ()ka use hota hai

  const obj=(num1,num2)=>({name:"anuj singh"})
  console.log(obj())