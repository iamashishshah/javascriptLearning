const user = {
    userName: "Ashish",
    courseName: "JavaCript in Hindi",
    price: 444,
    welcomeMessage: function (userName){
        // console.log(`Hello, ${userName}, thanks for purchasing course ${this.courseName}`); 
        //use this keyword to access current scope variable otherwise don't
        console.log(`Hello, ${this.userName}, thanks for purchasing course ${this.courseName}`);
        console.log(this)
        return this.price
    }
    
}
// console.log(user.welcomeMessage("Abhay"))
// console.log(user.welcome())  we can't do like this
// console.log(this)



// function one(){
//     let username = "Ashish"
//     console.log(this)
//     console.log(this.username) //we can use this keyword, it will give undefined
// }
// one()



// let two = function(){
//     let username = "Ashish"
//     console.log(this)
//     console.log(this.username)   //same
// }
// two()




// const arrowFunction = () =>{
//     let username = "Ashish"
//     console.log(this)  //in the arrow function, this keyword will return empty object but not in the other case
//     console.log(this.username)
// }
// arrowFunction()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(4, 55))


//implicit return in arrow function, when there is not much declaration

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)  //implicit return

// const addTwo = (num1, num2) => "Ashish"
// const addTwo = (num1, num2) => 33
// const addTwo = (num1, num2) => ({
//     username: "Ashish Shah"
// })

// const addTwo = (num1, num2) => ([3, 23, 44, 23])
const addTwo = (num1, num2) => ([3, 23, 44, 23])
// console.log(addTwo(4, 5))



//can we declare function inside of array

let myArray = [3, 4, 6, {
    username: "Ashish Shah",
    messageToUser: "You are inside of array creating an object",
    welcomeMessage: function (){
        console.log(`Hello, ${this.username}, welcome to India`)
    }
}, function noNeedToGiveName(){
    return 44
}]
console.log(myArray[3].welcomeMessage())
console.log(myArray[4]())