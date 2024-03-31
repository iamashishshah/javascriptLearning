let normalString = "Ashish Shah"
let myObjectString = new String("This is Object String")
// console.log(normalString.toUpperCase());   //convert into upper case
// console.log(normalString.toLowerCase());   //convert into lower case
// console.log(normalString.toLocalLowerCase());   

// console.log(myObjectString.toLocaleLowerCase()); //it works on locar or international based things

let myArray = [1, 3, 4, 6, 7]
let newString = myArray.toString()
let myName = "Ashish ".concat(newString)
// console.log(typeof myArray.toString())  //to string convert array into string 
// console.log(typeof myName)

let myObject ={
    name: "Ashish",
    location: "Bangalore"
}

console.log(typeof myObject.toString())