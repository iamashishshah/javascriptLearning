// array declaration

// let myArray = [2, 3, 4, 5, 55]
// let myArrayNew = new Array(3, 4, 5, "AshishShah", true)
// console.log(myArray)
// console.table([myArray, myArrayNew])
// console.log(typeof myArray)
// console.log(typeof myArrayNew)


/*********************************methods of array***************************** */
// console.log(myArray)

// let pushEle = myArray.push("Ashish")   //push function pushes a element in the last of array and the length of array
// console.log(myArray)
// console.log(pushEle)

// let pushEle2 = myArray.push("Shah")
// let pushEle3 = myArray.push("Shah1")   
// console.log(pushEle2)
// console.log(pushEle3)

// let popEle = myArray.pop()    //pop, pops the last element from the array and returns the popped element
// console.log(popEle)

// let popEle2 = myArray.pop()
// console.log(popEle2)

//arrays do shallow copy not deep copy

// let myArray = [2, 3, 4, 5, 55]

// let shiftArray = myArray.unshift("Ashish") //Inserts new elements at the start of an array, and returns the new length of the array.
// let shiftArray1 = myArray.unshift("Shah")
// console.log(myArray);
// console.log(shiftArray);
// let unShiftA = myArray.shift()  // Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log(myArray);
// console.log(unShiftA);

// let myArray = [2, 3, 4, 5, 55]
// // console.log(myArray.includes("Ashish"));  //true or false
// // console.log(myArray.indexOf(664))  //gives the ele index otherwise -1
// console.log(myArray);
// console.log(myArray.join().toString());  //join method doesn't change the original array instead of it returns string
// console.log(myArray);



// slice and splice, slice slices from the starting(included) index till last index mentioned(excluded) and doesn't change the original array
//while splice, slices from the starting to end index(both included) and also removes from the original array

let myArray = [2, 3, 4, 5, 55]

let array1 = myArray.slice(2, 5)
console.log(array1);
console.log(myArray);

let array2 = myArray.splice(2, 5)
console.log(array2);
console.log(myArray);
