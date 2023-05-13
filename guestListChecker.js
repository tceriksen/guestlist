// Checking a name against a guest list.

let guestList = ["Thomas", "Tippe", "Maria", "Jeppe", "Jonas", "Frederik"];

let check = prompt("What is your name?");

let lowerCase = check.toLowerCase();

let firstLetter = lowerCase.slice(0,1).toUpperCase();

let newName = firstLetter + lowerCase.slice(1, lowerCase.length);

if (guestList.includes(newName)) {
    console.log("Welcome.");
} else {
    console.log("You're not on the list");
}
