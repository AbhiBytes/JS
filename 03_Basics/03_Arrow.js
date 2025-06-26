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

console.log(this);
