const name = "Abhimanyu"
const repoCount = 10

// console.log(name + repoCount + " Value"); // Outdated Syntax (avoid it)

console.log(`Hello my name is  ${name} and  my repo count is ${repoCount}`);

const gameName = new String('Candy-crush')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf("B"));

const newString = gameName.substring(0,2)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  Abhimanyu  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://github.com/%23"
console.log(url.replace("%23", "codespaces"));

console.log(url.includes("github"));
console.log(url.includes("lol"));

console.log(gameName.split("-"));












