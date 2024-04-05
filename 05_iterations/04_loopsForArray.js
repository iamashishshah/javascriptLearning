//for of

//we do like this
// let b = ["", "", " "]
// // let a = [{}, {}, {}, {}]
// if(b) console.log(b)

const array = [1, 3, 4, 5, 6];
for (const value of array) {
  //iterator: name, object can be anything on which u want to iterate:
  // value += 2
  // console.log(value);
}

const arrayOfObject = [
  {
    name: "Ashish",
    college: "BIT",
    sem: 3,
  },
  {
    name: "Abhay",
    age: 20,
    yearOfBirth: 2003,
  },
];

for (const value of arrayOfObject) {
    // console.log(value.name);
    // console.log(value.age);
    // console.log(value.college);
}

//for of on string
let name = "Ashish Shah"
for (const literal of name) {
    if (literal === " ") {
        continue
    }
    // console.log(literal);
}


//Map in javascript

let map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("Fr", "France")
map.set("Fr", "France")

// console.log(map);
for (const key of map) {
    // console.log(key);  //[ 'IN', 'India' ], [ 'USA', 'United States of America' ] it will give array of key: value
}

// want to de-structure
for (const [keys, value] of map) {
    // console.log(`${keys}:) ${value}`);
}


//for of on object only

const myObje = {
    name: "Ashish",
    sem: 3,
    age: 20, 
    location: "Bangalore, India", 
    myDetails: {
        address: "BIT mens hostel", 
        area: "VV Puram", 
        roomNo: 133
    }
}

// for (const key of myObje) {
//     console.log(key);  // my object is not iterable
    
// }

// for (const [key, value] of myObje) {
//     // console.log(key);  // my object is not iterable

// }