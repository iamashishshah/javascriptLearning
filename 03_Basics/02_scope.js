let a = 22
var b = 33
const c = 433
if (true) {
    // let a = 50 here I am re-declaring the variable, that's why it value will not reflect outside of scope
    a = 50
    console.log(a)
}

console.table(a)

