//objects using constructor method

const tinderUser = new Object()
tinderUser.Id = "username123"
tinderUser.age = 10
tinderUser.location = "singapore"
tinderUser.DoB = 30

// console.log(tinderUser);

//merging of two or more objects

const obj1 = {
    1: "name", 
    2: "address",
}
const obj2 = {
    3: "name1", 
    4: "address1",
}
const obj3 = {
    5: "name1", 
    6: "address1",
}
const obj4 = {
    8: "name1", 
    9: "address1",
}

// const obj3 = {obj1, obj2} 
  /*{   it will give output like this
    obj1: { '1': 'name', '2': 'address' },
    obj2: { '1': 'name1', '2': 'address1' }
  }
  */


// if we want to merge object to a single object then we have to use Object.assign and it returns a single object
// const obj3 = Object.assign({}, obj1, obj2)   // { '1': 'name', '2': 'address', '3': 'name1', '4': 'address1' }  {} empty object(for target)
// console.log(obj3);


// const obj3 = Object.assign({}, obj1, obj2)  //obj1 is the target object, if we don't store in obj3, it is storing in obj1, so we give empty object, so that our original object doesn't get affected
// console.log(obj1) 
// console.log(obj3) 



// we will use spread method more

const resultObj = {...obj1, ...obj2, ...obj3, ...obj4}
// console.log(resultObj);
// console.log(obj1)



//when objects comes from database, it comes as array of objects like:
const userData = [
    {
        user1: "Ashish", 
        age: 20
    }, 
    {
        user2: "Abhay",
        age: 22
    },
    {
        user3: "Deepak",
        age: 33
    }
]
// console.log(userData[0].user1);

//we can take keys of any object and it gives us as array of keys, and we can use loop upon those keys
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));   /*[
    [ 'Id', 'username123' ],
    [ 'age', 10 ],
    [ 'location', 'singapore' ],
    [ 'DoB', 30 ]
  ]
  */
console.log(tinderUser.hasOwnProperty('Location'));  //false
console.log(tinderUser.hasOwnProperty('location'));  //true

