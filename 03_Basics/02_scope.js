let a = 22
var b = 33
const c = 433
if (true) {
    // let a = 50 here I am re-declaring the variable, that's why it value will not reflect outside of scope
    a = 50
    // console.log(a)
}

// console.table(a)

//scope level and mini hoisting
one()
function one(){
    // console.log("Welcome back to javascript learning")
}


/*
JavaScript is called a first-class language because functions in JavaScript are treated as first-class citizens. This means that you can assign them to variables, pass them as arguments to other functions, and return them from functions.

functions are simply a value and are just another type of object

*/



const funTwo = function (num){
    console.log("Parameter value: ", num)
}
funTwo(44)

/*
Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope before code execution. This means that a function or variable can be used before it has been declared.
*/

//variable hoisting will work only on 'var' keyword

console.log(x)
var x = 23