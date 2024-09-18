//truthy falsey value

const mail=[]
if(mail){
    console.log(`you got mail`);
    
}else{
    console.log(`you got not mail`);
    
}

// falsy value
//false,0,-0,bigint 0n,"",null,undifined,nan

// truthy values
// "0",'false'," ",[],{},function(){},
//arary empty check    
if(mail.length===0){
    console.log("array is empty")
}
//object check karna
const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("object is empty")
}

//nullish coalescing operator(??)null undifined

let val1;
//val1=5??10
//val1=null ?? 10
//val1=undefined ?? 15
val1=null ?? 10 ??15


console.log(val1)
// ternary operator
// syntax condition ? true: false
const tea=100
tea>=80 ? console.log("less thn 80") : console.log("more than 80")
