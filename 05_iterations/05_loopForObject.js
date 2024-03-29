const myObj = {
    "js": "javascript", 
    "cpp": "C++", 
    "rb": "Ruby", 
    "swift": "Swift by apple"
}

for (const key in myObj) {
    // console.log(key);  //you got the keys here
    // console.log(myObj[key]);  // now you can get values here also
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}


const myArray = [15, 24, 32, 24, 45]
for (const key in myArray) {
    // console.log(myArray[key]);
}

// let map = new Map()
// map.set("IN", "India")
// map.set("USA", "United States of America")
// map.set("Fr", "France")
// map.set("Fr", "France")
// map.set("Fr", "France")

// for (const key in map) {
//    console.log(key);
// }

