const user = {
    username : "Abhimanyu",
    price: 999,

    welcomeMessage: function() {
        
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
        
    }
}

// user.welcomeMessage()

// user.username = "Sanni"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "Abhimanyu"
//     console.log(this.username);
    
// }
// chai()

// const chai = function () {
//     let username = "Abhimanyu"
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "Abhimanyu"
//     console.log(this);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) => ( {username : "Abhimanyu"})
console.log(addTwo(3, 4));

// const myArr = [2,3,5,6]
// myArr.forEach()