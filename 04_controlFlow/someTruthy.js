const userEmail = "a@google.ai"
const nullString = ""  //NULL string false, other are true

if (nullString) {
    // console.log("if: Null String considered as True");   
}else {
    // console.log("else: Null String considered as false"); 
}



// Check empty array
let array = []
if (array) {  //empty array by default considered as true
    // console.log("if: Empty Array considered as True");   
} else {
    // console.log("else: Empty Array considered as False");   
}
// console.log(array)


//check empty object

let myObj = {}
if (myObj) {    //empty object by default considered as true
    // console.log("if: Empty Object considered as True");   
} else {
    // console.log("else: Empty Object considered as False");   
}
// console.log(myObj)


//++++++++++++++++LIST of Falsy Values+++++++++++++++
/*
false, null, undefined, 0, -0, BigInt 0n, "", NaN
*/

//++++++++++++++++LIST of Truthy Values+++++++++++++++
/*
"0", "false", "anything in string", 1, " ", [], {}, function() {} 
*/


if (NaN) {  //NaN considered as false
    // console.log("NaN: considered as true");
} else {
    // console.log("NaN: considered as false");
}

if (function() {console.log("Nothing")}) {   //empty or declared function considered as true
    // console.log("Empty function is considered as true");
} else {
    // console.log("Empty function is considered as false");
}



//we check array like this
let myArray = []
if (myArray.length === 0) {
    // console.log("if: Empty Array considered as True");
} else {
    // console.log("if: Empty Array considered as false");
}


//we check emptyObject like this
let emptyObject = {}
if (Object.keys(emptyObject).length === 0) {
    // console.log("if: Empty Object considered as True");
} else {
    // console.log("else: Empty Object considered as false");
}


if (false == false) {
    // console.log("false == false: true")
} else {
    // console.log("false == false: false")
}

if (false == "") {
    // console.log('false == "": true')
} else {
    // console.log('false == "": false')
}

if (false == 0) {
    // console.log('false == 0: true') 
} else {
    // console.log('false == 0: false')
}

if (false == "true") {
    // console.log('false == "true": true') 
} else {
    // console.log('false == "true": false') 
}

if (false == "false") {
    // console.log('false == "false": true') 
} else {
    // console.log('false == "false": false') 
}

