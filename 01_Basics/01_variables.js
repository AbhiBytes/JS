const accountId = 144356
let accountEmail = "Abhi123@gmail.com"
var accountPassword = "12345"
accountCity = "Noida"
let accountState

// accountId = 2 //not allowed
accountEmail = "abd123@gmail.com"
accountPassword = "54321"
accountCity = "Delhi"

console.log(accountId);
/*prefer not to use var
because of issue in the block scope(curly braces to braces) and functional scope
*/
console.table([accountId, accountEmail, accountCity, accountPassword, accountState]);

