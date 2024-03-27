function sayMyName(){
    console.log("A")
    console.log("S")
    console.log("H")
    console.log("I")
    console.log("S")
    console.log("H")
}

// console.log(sayMyName)  //this is reference of the function
// console.log(sayMyName())  //reference type of a function is undefined

function isLoggedIn(username = "Shah"){
    if(!username){
        console.log("Please Enter your name: ")  //undefined, null string, 'null' is false
        return
    }
    return `${username}, logged in`
}

// console.log(isLoggedIn())

//in shopping cart, we don't know how many items users are going to add, to price is unknown

function calculateCartPrice(val1, val2, ...num){
    return num 
}

// console.log(calculateCartPrice(200, 300, 400, 300))

const user = {
    username: "Ashish",
    price: 442
}

const userTwo = {
    username: "Abhay",
    price: 3323
}
//passing objects inside of fuction
function handleObject(anyobject, anyobject1){
    //console.log(`Username is ${anyobject.username} and price is ${anyobject1.price}`)
}

// handleObject(user, userTwo)
handleObject({
    username: "thisisashishshah",
    price: 442
}, {
    username: "DDEEPAK",
    price: 333
})


//Passing arrays inside of a function

function shoppingCartPrice(array){
    console.log(array)
}

let myArray = ["Ashish", "BIT", "3rd sem","Bangalore", 25]
// shoppingCartPrice(myArray)
shoppingCartPrice(
    [
        "Ashish", "Shah", "Bangalore"
    ]
)
// shoppingCartPrice([3, 4, 5, 6,77])
