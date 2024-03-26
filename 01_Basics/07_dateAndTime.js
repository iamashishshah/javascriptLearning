// let myDate = new Date()   //data type is object
// console.log(myDate)     //This gives output in unformatted manner like this: 2024-03-26T04:21:25.909Z
// console.log(myDate.toString())   //This formates the time and date  like this: Tue Mar 26 2024 04:19:50 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleString())  //This gives local time and date: 3/26/2024, 4:21:25 AM
// console.log(myDate.toLocaleDateString())  //this gives only date in local string: 3/26/2024
// console.log(myDate.toTimeString())  //this gives time only like: 04:21:25 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toISOString())   //this and next both give the same output: 2024-03-26T04:25:47.366Z
// console.log(myDate.toJSON()) 
// console.log(myDate.getTime())   //gives some number : 1711427147366
// console.log(myDate.getTimezoneOffset())   // gives 0
// console.log(typeof myDate)

//lets create our own date and time

// let myCreatedDate = new Date(2024, 1, 34)  //if you give date of the day and month more that 12 then it will add and give next month or year both.

// let myCreatedDate = new Date(2024, 0, 4)  //here first month starts with 0
// console.log(myCreatedDate.toString())

// let myCreatedDateAndTime = new Date(2024, 2, 26, 23, 12, 34)
// console.log(myCreatedDateAndTime.toLocaleString())
// console.log(myCreatedDateAndTime.toString())

// //yy/mm/dd
// let dateType1 = new Date("2024-01-23") // here month starts with 1
// console.log(dateType1.toLocaleString())

// //indian dd/mm/yy
// let indianDate = new Date("01-02-2024")
// console.log(indianDate.toLocaleString())

// let indianDate1 = new Date("01,02,2024") //this is also valid date and its time starts from 12:00 AM
// //let indianDate2 = new Date("01022024")  //this is invalid date
// //let indianDate2 = new Date("01.02.2024")  //this is also valid date
// //let indianDate2 = new Date("01/02/2024") //this is also valid date
 let indianDate2 = new Date("01/02/2024") 
// console.log(indianDate1.toLocaleString())
// console.log(indianDate2.toLocaleString())




//timeStamp when you design quizes, hotel app

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(indianDate2.getDate());
// console.log(indianDate2.getTime());

let diffms = myTimeStamp - indianDate2.getTime()
// console.log(diffms)
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date(1030, 0, 1, 10, 12, 59)  //(yy, mm, dd, hours, min, sec)
// console.log(newDate.getDate());
// console.log(newDate.getUTCDate());

console.log(newDate.toLocaleString("en-IN", {
    day: 'numeric',  // it has only two options:  2-digit, numeric both are same(23, 24, )
    weekday: 'long', //it has 3 options: long(saturday), narrow(S, M, T), short(Sat, Sun, Mon, Tue)
    month: 'long', //it has 5 options: 2-digit(03), long(March, January), narrow(J,F), short(jan, fab), numeric(1,3)
    year: '2-digit',  // it has 2 options: 2-digit(24, 25, 26), numeric(2024, 2025, 1030)
    second: 'numeric',  // it has 2 options: 2-digit and numeric but both are same: (23) and same for minute and hour
    minute: '2-digit',
    hour: '2-digit'

}))

