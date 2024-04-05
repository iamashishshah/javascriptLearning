const coding = ["C", "js", "ruby", "HTML", "CSS", "swift"]

// coding.forEach((ele, indexOfElement, completeArray) =>{
//     console.log(ele, indexOfElement, completeArray)   //ele, indexOfElement, completeArray
// })


// let returnCheck;
// returnCheck = coding.forEach((ele, indexOfElement, completeArray) =>{
//     console.log(ele, indexOfElement, completeArray)   //ele, indexOfElement, completeArray
// })
//it returns undefined


// let returnCheck;
// returnCheck = coding.forEach((ele, indexOfElement, completeArray) =>{
//     return ele;
// })
// console.log(returnCheck);


let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let returnedArray = myNums.filter((num) => num > 4)   //Returns the elements of an array that meet the condition specified in a callback function.

// let returnedArray = myNums.filter((num) => {
//     return num > 4;
// })
// console.log(returnedArray);


// myNums.filter((num) => {
//     console.log(num);
// })


//same thing we can do with for each loop

// let returnedArray = []
// myNums.forEach((num) =>{
//     if(num > 4)
//         returnedArray.push(num)
//     else;
//         // returnedArray.push(false)
// })
// console.log(returnedArray);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //I want all that book whose genre is history

//   let historyBooks = books.filter((book) => book.genre === "History")
//   for(const bookName of historyBooks){
//     console.log(bookName.title);
//   }

//give me all those books which was published after 1995

// let booksafter1995 = books.filter((book) => book.publish > 1995)
// for(let book of booksafter1995){
//     console.log("Book name: ", book.title,",  Publish year: ",book.publish)
// }


//give me all those books which was published after 1995 and its genre should be Science only

let booksafter1995 = books.filter((book) => book.publish > 1995)
console.log(booksafter1995)
for(let book of booksafter1995){
    if(book.genre === "Science")
        console.log("Book name: ", book.title,",  Publish year: ",book.publish)
}