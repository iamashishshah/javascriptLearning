//           1> primitives
 /*
7 types: String, number, boolean, null,  undefined, Symbol, BigInt
 */

//           2> Non- primitives or reference types: Array, function, and Objects.


//we use symbol for unique purpose like storing id, email

let id = Symbol("123")
let anotherId = Symbol("123")
console.log(id == anotherId);

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/