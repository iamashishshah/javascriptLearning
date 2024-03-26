let myArray = [2, 3, 4, 5, 55]
let myArray1 = [32, 33, 74, 53, 545]
let myNewArray = ["spiderman", "ironman", "thor"]
let myNewArray1 = ["spider", "iron", "thorman"]
// myArray.push(myNewArray)

// console.log(myArray)
// console.log(myArray[5][2])
// let conArray = myArray.concat(myNewArray, myArray1)   //Combines two or more arrays. This method returns a new array without modifying any existing arrays.


//instead of using concat we can use spread
let conArray = [...myArray1, ...myNewArray, ...myArray, ...myNewArray]
// console.log(myArray)
// console.log(conArray)



//if there are array inside of array
let array = [1, 23, 44, [44, 23, 3, [55, 3,32, 4, ["Ashish", "shah", ["sedond last", ["first last", ["last array"]]]]]]]
let okArray = array.flat(Infinity)  //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(okArray);

let score1 = 100
let score2 = 200
let score3 = 300
let newArry = Array.of(score1, score2, score3)   //Returns a new array from a set of elements
console.log(newArry);
//console.log(Array.isArray(new Array(44, "Ashish")))
console.log(Array.isArray(newArry[2]))

let myString = "Ashish Shah"
let newSomething = Array.from(myString)
console.log(Array.from(myString))  //The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
console.log(newSomething)

//For now everything working fine, later I'll Learn Array.from(arrayLike, mapFn, thisArg)