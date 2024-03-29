const languages = ["js", "java", "swift", "python", "c++"]

languages.forEach(function (value){
    // console.log(value);
})

languages.forEach((value) =>{
    // console.log(value);
})

//first function language

const printMe = (item) =>{
    // console.log(item);
}
languages.forEach(printMe)

languages.forEach((item, index, fullArray) =>{
    console.log(item, index, fullArray);
})