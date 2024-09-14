//+++++++++++++++++ scope++++++++++++++++++++++++

let a=20
const b=30//fix value
var c=69
//console.log(a)
//console.log(b)
//console.log(c)

// global scope ki value har jagah access kar sakte hai
// local scope ki value only  under{}kar sakte hai
if(true){
    let a=169
    const b=535
    console.log("inner:",a)

}

console.log(a)//global local me global value block ke bahar

console.log(b)//global local me global value block ke bahar

//nested scope

function one(){
    const name="anuj"
    function two(){
        const website="github"
        console.log(name)
    }
   // console.log(website) not acceble this is local scope
     two()
  }
    one()

    if(true){
        const userName="anuj singh"
        if(userName==="anuj singh"){
            const bagName=" jara"
            console.log(userName+bagName)

        }
      //  console.log(bagName) not acceble out of scope
    }
    // console.log(userName) not acceble out of scope

    //+++++++++++++++interesting+++++++++++++++++++
    addOne(5) // asie bhi function ko call kar sakte hai
    function addOne(num){
      return num+1
        
    }
   // console.log(addTwo(8)) // varaible hold function ko aise call nahi kar sakte

    const addTwo =function(num){//
      return num+2
    }
    console.log(addTwo(8))
    




