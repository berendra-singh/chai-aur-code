//reduce in java script

const num=[1,2,3,61]
let total=num.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval${currval}`)
    return acc+currval
},2)
console.log(total)

const myNum=[2,3,4,60]
const myTotal=myNum.reduce((arr,curr)=>arr+curr,0)
console.log(myTotal)
