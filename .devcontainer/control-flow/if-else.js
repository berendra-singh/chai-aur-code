// if statement

const score=200
if(score<100){// if condition true then we can access var and use outside
    var power="fly"
    console.log(`user power is: ${power}`)
}
else{
    console.log(`user is not ready to: ${power}`)
}

// shorthand notations
const balance=6769
//if(balance>500) console.log(`you maintain minimum balance:${balance}`)//only single line useof , you can written in multi line code
 // nested if
  if(balance <500){
    console.log(`you  not maintain minimum balance`)
  }else if(balance<1000){
    console.log(` you maintain minimum balance`)
  }else {
    console.log(`your balance is high`)
  };
  // switch statement
  const month=6

  switch (month){
    case 1 :
        console.log("january")
    break;
    case 2:
    console.log("fabuary")
    break;
    case 3:
    console.log("march")
    break;
    case 4:
    console.log("aprail")
    break;
    case 5:
    console.log("may")
    break;
    case 6:
    console.log("june")
    break;
    default:
    console.log("you enter wrong value")
    break;

  }

  //









