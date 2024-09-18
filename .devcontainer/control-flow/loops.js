// for
 
for(let i=0;i<=10;i++){
    console.log(i)
    if(i==5)
        console.log("5 is best no")
}
    
for (let i = 1; i <=10; i++) {
    console.log(`outer loop value is ${i} `)
    for (let j = 1; j <=10; j++) {
     //   console.log(`inner loop value is ${j} outer loops is ${i}`)
     console.log(i + '*' + j + '=' + i*j)    
    }
}

let myArray=["flash","superman","batman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)   
}

// keyword break and continue
for (let index = 1; index <=20; index++) {
    if(index==15){
        break

    }
    console.log(index)
}

// while do while
  let index=0
  while (index<=11) {
    console.log(`value of index is ${index}`)
    index=index+1
  }
  

  let arr=["thor","america",'HULK']
  let arr2=0
  while (arr2<arr.length) {
    console.log(`value is ${arr[arr2]}`)
    arr2=arr2+1
  }

  // do while
  let score=69
  do {
    console.log(`score is ${score}`)
    score++
    
  } while (score<=79);

  
    

    
    


