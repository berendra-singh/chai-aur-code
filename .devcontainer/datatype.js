//premitive data type
// styring,number,boolean,null,undifined,symbol,bigint

//refrence type or non primitive
// array,object,functions
 
const id=Symbol('123')
const anotherId=Symbol('124')
console.table([id,anotherId])

// memory type
// stack, heap
//stack (primitive),heap(non-primitive)

let myFbName="anuj singh"


let anotherName=myFbName
anotherName="chaiaurcode"
console.log(anotherName)
console.log(myFbName)

let user={
    mail:"anuj@gmail.com",
     upi : "user@ypl"
}
let user1=user 
user1.mail="beerendra@gmail.com"
console.log(user.mail)
console.log(user1.mail)