// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());

console.log(myDate.toISOString());
console.log(myDate.toJSON());

console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());

console.log(myDate.toUTCString());

console.log(typeof myDate);

// let myCreateDate = new Date(2025,4,11)
// let myCreateDate = new Date(2025, 4, 11, 3,4)
// let myCreateDate = new Date("2025-05-11")
// let myCreateDate = new Date("11-05-2025")


console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear());
console.log(newDate.getDay());

`${newDate.getDay()} and the time`

newDate.toLocaleDateString("default", {
    weekday: "long",
    
})












