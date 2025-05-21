function sayMyName(){

console.log("A");
console.log("B");
console.log("H");
console.log("I");

    
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
    
}
const result = addTwoNumbers(2,4)

// console.log("Result :" , result);

function loginUserMessage(username = "someone") {
    if(!username) {
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Abhi"));
// console.log(loginUserMessage("Abhi"));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 300, 500));

const user = {
    username: "Abhi",
    price: 299


}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 199
})
const mynewArray = [200, 100, 300, 500]
function returnSecondValue(getArray) {
    return getArray[2]
}
console.log(returnSecondValue([200, 400, 300]));



