// if
if( "3" !== "2" ){        // 2 == "2" true  , 3 >= "2" true
    // console.log(`Testing`);
}

//when you use the less than or equal to operator (<=) between a number and a string, JavaScript will implicitly convert the string to a number and then perform the comparison.
// >, <, <=, >=, ==, !=, ===


if (!null) {   //null is considered as false
    // console.log(`If testing phase.`);
}

if (!undefined) {  //'undefined' also considered as false
    // console.log(`If testing phase.`);
}



//if - else
let isLoggedIn = false
if (isLoggedIn) {
    // console.log("User Logged in Successfully")
} else {
    // console.log("Forgret password?")
}


//implicit function writting
let score = 1000
// if (score > 500) console.log(`Score is greater than 500.`); // to end the scope
// if (score > 500) console.log(`Score is greater than 500.`), if(4>5), console={};  //we can write console only

// if (score > 500) console.log(`Score is greater than 500.`), console.log(`Score is greater than 400.`);

//don't write like above code, 

// if (5> 3) console.log(`It's true`)


//nesting of if-else condition
// if (condition) {
    
// } else if (condition) {
    
// } else{

// }


// where do we use it in real life of multiple conditional statement
let userLoggedIn = true
let debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = false
const guestUser = true

if (userLoggedIn && debitCard) {
    // console.log(`You're allowed to see content`);
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log(`you've logged in successfully.`);
}else{
    console.log("you've logged in as guest user.")
}

if (loggedInFromGoogle) {
    // console.log(`You've signed up from google.`)
}else if (loggedInFromEmail) {
    // console.log(`You've signed up from Gmail.`)
}else{
    // console.log(`Try again later, there is some error 101`)
}