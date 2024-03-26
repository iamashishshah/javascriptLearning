const accountId = 33323
let name = "Ashish Shah"
var accountPass = "Ashish@gmail.com"
email = "tempmail@gmail.com"
let accountState;

/*
we prefer not to use 'var' keyword
cuz of block and function scope
*/
// accountId = 88888; not allowed because it is declared as constant
name = "Abhay Sharma"
accountPass = "thisisashishshah";
email = "thisisnotamail";
console.table([accountId, name, accountPass, email, accountState])


