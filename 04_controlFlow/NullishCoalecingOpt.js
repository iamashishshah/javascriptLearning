//Nullish Coalecing Operator (??): null, undefined
let val1 = null;
let val2 = undefined;
val1 = 5??10
val2 = 1??15
console.log(val1);
console.log(val2);

val1 = null??10
val2 = undefined??15
console.log(val1);
console.log(val2);

let val3;
val3 = null??undefined??10??30
console.log(val3);

