// imediately invoked function expressions(IIFE)

   //named iife
 (  function chai(){ // new scope and global scope ki polution se bachne ke liye bachne ke liye
    const a= "anuj singh"
    let b=69
    console.log(`my name is ${a} and my fav no is ${b}`)

   })();

  (  (name) => { // arrow function with iife simple or un named iife
    console.log(`welcome my world ${name}`)
  })("anuj");

  // two iife combine
  (function() {
    // Outer IIFE
    var outerMessage = 'Hello from the outer IIFE!';
    console.log(outerMessage);

    (function() {
        // Inner IIFE
        var innerMessage = 'Hello from the inner IIFE!';
        console.log(innerMessage);
    })();
})();
  
     
   






   