//for of loop
const arr=[1,2,3,4,5,6,]
for (const num  of arr) { // for of kisi nhi chhej me lga sakte hai
    console.log(num)
}

//maps
const map=new Map()
map.set('In',"india")
map.set('usa',"united state of america")
map.set('fr',"france")
//console.log(map)
//for (const key of map) {
   // console.log(key)  
//}
// map ki desturctring and one part print ke liye
for (const [key] of map) {//[] us ethis to map destructring
    console.log(key)
}
//const obj={ // in object for of loop is not working

    price:69,
    name:"anuj",
//}
//for (const [key,value] of obj) {
  //  console.log(key,value)  
//}
