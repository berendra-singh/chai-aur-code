// for each
 const coding= ["flash","superman","batman","wonder women"]

 //coding.forEach(function(val){
   // console.log(val)
 //})

 coding.forEach((item)=>{
  // console.log(item)
 })

 let marvel=["ironman","thor","america","blackwidow"] 
 function print(item){
  console.log(item)
 }
 marvel.forEach(print)
//for each ke pass inde3x array ka pura  access hota hai
marvel.forEach((item,index,array)=>{
  console.log(item,index,array)
})
let myCoding=[
  {
    languageName:"HINDI IS BEST",
    languageFile:"hindi",
    personName:"anuj singh",
  },
  {
    languageName:" java script IS BEST",
    languageFile:"js",
    personName:"sweta singh",
  },
  {
    languageName:"java IS BEST",
    languageFile:"jawa",
    personName:"mohit singh",
  },
]
myCoding.forEach((item)=>{
  console.log(item.personName)
})


 



