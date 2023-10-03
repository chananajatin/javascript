// immediately invoked function expression 
//  global scope ke pollution se bchne ke lie
(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
})();// ye semicolon jruri hai agle iffe ke lie

( (name) => {
    console.log(`db connected to ${name}`);
})('jatin')
// chai()