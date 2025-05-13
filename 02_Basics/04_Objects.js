// const { useSyncExternalStore } = require("react")

// const tinderUser = new Object() // singleton Object
const tinderUser = {} // non singleton Object

tinderUser.id = "123as"
tinderUser.name ="Abhi"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "Abhi123@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Abhimanyu",
            lastname: "Singh"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign( {} ,obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const user = [
    {
        id: 1,
        email: "A@gmail.com"
    },
     {
        id: 2,
        email: "b@gmail.com"
    },
     {
        id: 3,
        email: "c@gmail.com"
    },

]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "JS",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: Teacher} = course
// console.log(courseInstructor);

// console.log(Teacher);

// {
//     "name": "Abhimanyu",
//     "courseName": "JS",
//     "price": "free"
// }

[
    {},
    {},
    {}
]















