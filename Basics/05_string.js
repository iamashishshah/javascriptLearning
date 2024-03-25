let myName = new String("           This is Ashish Shah          ")  // this creates object
let normalName = "Ashish Shah"
console.log(myName)
console.log(normalName)

// ***********Fucntions for String********************

console.log(myName.valueOf())   //Converts obj string into normal string
let unTrimName = "           Ashish-shah        "
let normalString = myName.trimEnd()  //trims from right and gives normal string even to object
let normalString1 = myName.trimStart() // trims from left or start n gives normal string even to object string
console.log(normalString)
console.log(normalString1)
console.log(myName.trim())  //removes whitespace from the both the ends n returns new string without modifying it
let index = 4;
console.log(normalName.charAt(index))  //charAt n at won't work on str obj but it will work on normal string and will give chart at that index
console.log(normalName.at(index))


let str1 = "Hello "
let str2 = "India "
let str3 = "Welcome "
console.log(str1.concat("Papa", str2))
console.log(str1.concat(str3, str2, str1))
console.log(str1.concat(str3, str2, str1))   //The concat() function concatenates the string arguments to the calling string and returns a new string.
// console.log(concat(str3, str2, str1)), can't write like this, there should be any calling function

let str4 = "New string THIS is Ashish Shah O"
console.log(str4)
//str4 = str4.concat(str1, str2, " papa", str3)
console.log(str4.concat(str1, str2, " papa", str3))  //concat doesn't change original string, it just add in that n variable name is replaced by string value so you can put directly string instead of variable name
console.log(str4)
console.log("Thisisashishshah".concat(str1, str2, " papa", str3))
console.log(str4.length)
console.log(str4.endsWith("ing")) 
console.log(str4.includes("n")) //case sensitive, check in whole string return: true or false

// string interpolation method
console.log(`Hello this is Ashish shah, ${str3}`)

let testString = "first Strings"
console.log(testString.indexOf('rings')) //it will index of first string 
console.log(testString.includes('F')) // takes iput as string and gives output boolean value