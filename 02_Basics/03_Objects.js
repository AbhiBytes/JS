//singleton

// object literals
const mySym = Symbol("key1")

const JsUsers = {
    name: "Abhimanyu",
    "full name": "Abhimanyu Singh",
    [mySym]:  "myKey1",
    age: 22,
    location: "Delhi",
    email: "abhi123@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]


}


console.log(JsUsers.name);
console.log(JsUsers.email);
console.log(JsUsers["location"]);
console.log(JsUsers[mySym]);
console.log(typeof JsUsers.mySym);

JsUsers.email = "Abhi321@gmail.com"
// Object.freeze(JsUsers)
JsUsers.email = "Abhi456@gmail.com"
console.log(JsUsers);

JsUsers.greeting = function(){
    console.log("Hello JS Learner");
    
}
console.log(JsUsers.greeting());

JsUsers.greeting2 = function(){
    console.log(`Hello JS Learner, ${this.name}`);
    
}
console.log(JsUsers.greeting2());







