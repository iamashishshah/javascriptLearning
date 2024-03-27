// immediatly invoked function expression(IIFI) syntax: ()()
/*
An Immediately Invoked Function Expression (IIFE) in JavaScript is a function that is defined and executed immediately after its creation. It is a way to create a function and execute it right away without needing to call it explicitly.
*/

(function (){  //here no need to give name of the function, but u can give for readibilty
    console.log("DB connected");
})();  //we use here semicolum to stop that function

((name)=>{
    console.log(`DB CONNECTED TWO, ${name}`)
})("MongoDB")