// we have two ways to declare objects: 1. as literal 2. as constructor/singleton

//singleton: Object.create

//object literals

let mySym = Symbol("key1")

const jsUser = {
    name: "Ashish",   //this is the key value pair: key: "value", key is also treated as string, so when accessing it use as string
    age: 20, 
    [mySym]: "My first key",
    isLoggedIn: false, 
    mailId: "ashish@google.com",
    lastLoggedIn: ["Monday", "Tuesday", "Wednesday"],
    location: "Bangalore",
    hisEducation: {
        collegeName: "Bangalore institute of technology",
        isPass: true, 
        CGPA: 9, 
        howManySem: 8,
        collegeMail: "bitusn@gmail.com", 
        doesHeHasCollegeId: true,
        performanceScore: 100
    },
    "Full Name": "Ashish Shah",
    "Full Address": "BIT Hostel, VV Puram, Bangalore, 560004"  //there is no way to access this using dot method, so use new

}

//how to access it
// console.log(jsUser.hisEducation.collegeMail);
// console.log(jsUser.lastLoggedIn)  
// console.log(jsUser["age"])
// console.log(jsUser["lastLoggedIn"]) 
// console.log(jsUser["Full Address"])
// console.log(typeof jsUser[mySym])
// console.log(typeof jsUser["Full Address"])


//we can override object's value
jsUser.mailId = "ashish@microsoft.com"
//console.log(jsUser.mailId);

//how can I freeze a single object's element
//Object.freeze(jsUser.mailId)   //no we can't freeze like this


//but we can also freeze object
//Object.freeze(jsUser)  //it will freeze all objects to changing
jsUser.mailId = "ashish@chatgpt.com"

// we can also add elements in object
jsUser.hisEducation.tempMailId = "temp@google.com"
// console.log(jsUser.hisEducation.tempMailId);
// console.log(jsUser)

jsUser.greeting = () => {
    console.log("Welcome to India!")
}
jsUser.greetingTwo = function() {
    console.log(`Welcome to India!, ${this.age}`)
}
jsUser.greetingThree = () => {
    console.log(`Welcome to India!, ${this.age}`)    //this method doesn't work on arrow=> function
}

console.log(jsUser.greetingTwo())
console.log(jsUser.greeting())
console.log(jsUser.greetingThree())


