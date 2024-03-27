// de-structuring of objects

const course = {
    courseName: "Figma in hindi", 
    coursePrice: "333",
    courseInstructor: "Ashish"
}

// course.courseInstructor

const {courseInstructor: nameBc} = course
// console.log(courseInstructor);
// console.log(nameBc);


//JSON API
// {
//     name: "Figma tutorial in Hindi", 
//     price: "freee",
//     instructor: "Ashish Shah"
// }   we get API like this, and then we'll convert it into objects then use this data

//sometimes we get APIs in form of arra

// [
//     {}
//     {}
//     {}
//     {}   like this
// ]