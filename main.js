console.log("I am Ready!");

//Iteration 1
let hacker1 = "Michael"
console.log(`The Driver's Name is ${hacker1}`);

let hacker2 = "John"
console.log(`The Navigator's Name is ${hacker2}`);


//Iteration 2
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the Longest name, it has ${hacker1.length} Characters.`)
}
else if (hacker1.length > hacker2.length) {
    console.log(`It seems that the Navigator has the longest name, it has ${hacker2.length} Characters.`)
}
else {
    console.log(`WOW, you both have equally long names, ${hacker1.length} Characters.`)
}

//Iteration3
let DName = ""
for(let i=0; i < hacker1.length; i++) {
    DName += hacker1[i].toUpperCase() + " ";
}
console.log(DName.trim())

let NName = "";
for(let i = hacker2.length - 1; i >= 0; i--) {
    NName += hacker2[i]
}
console.log(NName);

hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();

if (hacker1 > hacker2) {
    console.log("The driver's name goes first.")
}
else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first definitely.")
}
else {
    console.log("")
}
