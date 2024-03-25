let score = 100
let balance = new Number(100)  // we can convert this type of obj number directly into string
// console.log(score.toString().length);
// console.log(balance.toString().length);
// console.log(balance.toString().indexOf('0'));

let customerBalance = 100.33543
// console.log(customerBalance.toFixed(2))  //returns string of fixed point-notation

let otherNumber = 123.5945
// console.log(otherNumber.toPrecision(5)) // it gives you that much precised value

let hundreds = 1000000
// console.log(hundreds.toLocaleString("en-IN"))

// console.log(Number.NEGATIVE_INFINITY)

// *****************MATHS**************

// console.log(Math)   //It is object which has so many function
// console.log(Math.round(4.5))
// console.log(Math.ceil(4.5))
// console.log(Math.floor(4.5))
// console.log(Math.round(Math.random()*10)) //generates random number between 0 to 1
// console.log(Math.abs(-33))  //gives positive value
// console.log(Math.sqrt(4.55).toPrecision(3))
// console.log(Math.pow(3, 2.44).toPrecision(4))
// console.log(Math.max(3, 5,32,3,32,23,3,4324))
// console.log(Math.min(3, 5,32,3,32,23,3,4324))

// I want value from 12 to 23[12 and 23 should be included]

let min = 12
let max = 23
console.log(Math.floor(Math.random() * (max - min + 1) + min))

let num = Math.random() * 10
if(num < 0){
    console.log(Math.floor(num))
}else{
    console.log(Math.ceil(num))
}
