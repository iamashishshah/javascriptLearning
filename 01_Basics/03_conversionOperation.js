// why do we require data conversion

/*
sometimes we don't know type of data is coming from backend so we require to
convert it as required type before we use it.
*/

let score = null   // it will give 0

//console.log(typeof score);
//console.log(typeof(score));

let scoreString = Number(score);

//console.log(typeof(scoreString));
//console.log(scoreString);  
// when we do convert mix of string and number, it gives us NaN(not a number)

/*
"33" => 33 
"333ab" => NaN but its type is number only
true => 1, false => 0

other investigation
"" => false
"Ashish" => true
1 => true, 0 => false

*/

let loggedIn = 1
let booleanLoggedIn = Boolean(loggedIn);
//console.log(booleanLoggedIn);


// ********************* OPERATION *************************

let str1 = "Ashish";
let str2 = " Shah";
let str3 = str1 + str2;
console.log(str3);
console.log(str1 + str2)
console.log(1 + "2");
console.log("1" + 2);
console.log("1" + 3 + 3);
console.log(1 + 3 + "2");  //code interprets L to R