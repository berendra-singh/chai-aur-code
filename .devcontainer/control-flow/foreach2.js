let coding=["anuj","sweta","pagal","python","cpp"]
const value=coding.forEach( (item)=>{// foreach valu4e return nahi karta
    console.log(item)
    return item
})
//console.log(value)

const num=[1,2,3,4,5,6,7,8,9,10]

 let newNums=num.filter( (num)=>num>6)//  filter value return karta hai
 console.log(newNums)


const number=[11,22,33,44,55,69,169,99]
const newName=[]
number.forEach( (num)=>{ //foreach condtion check and return value
    if(num>55){
        newName.push(num)
    }
})
console.log(newName)


const number3=[1,23,3,,4,5,6,7,69]
 //const number4=number3.map( (num)=>num+10)// mao function automatic return value

//console.log(number4)


// number3.forEach((value,index,array)=>{
  //  array[index]=value+10
 //})
 //console.log(number3)

 //second method foreach
// const number4=[]

 //number3.forEach((numb)=>{
   // number4.push(numb+10)

 //})
 //console.log(number4)

 // chaiining system we can unlimited chain method
 const number4=number3.map((num)=>num*10).map((num)=>num+2).filter((num)=>num>=40)

 console.log(number4)

 



 
 
 






