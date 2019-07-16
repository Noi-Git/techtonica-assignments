// Welcome to the prework assessment!

// Exercise 1. Declare a variable called animal and give it a value of your choice
let animal = "dog";

// Exercise 2. Write a conditional that does the following:
// If the value of animal is "lion", print to the console "I'm scared!"
// If the value of animal is "dog", print to the console "So cute"
// If the value of animal is "frog", print to the console "Ribbit ribbit"
// For any other value, print "Just another animal"
if (animal === "lion") console.log("I'm scared!");
else if (animal === "dog") console.log("So cute");
else if (animal === "frog") console.log("Ribbit ribbit");
else console.log("Just another animal");
console.log("===== end of exercise 2 ====");

// Exercise 3. Declare 2 variables called person1Age and person2Age and give them values of your choice.
// Write a conditional that does the following:
// If both ages are less than 18, print "You are both children"
// Otherwise, print "At least one adult here" 
person1Age = 22;
person2Age = 15;

if (person1Age < 18 && person2Age < 18) console.log("You are both children");
else console.log("At least one adult here");
console.log("===== end of exercise 3 ====");

// Exercise 4. Write a for loop that prints the integers starting 
// at 20, and counts down to 10. (Include 20 and 10)
for (let i = 20; i >= 10; i--) {
    console.log(i);
}
console.log("===== end of exercise 4 ====");

// Exercise 5. Write a while loop that prints the multiples of 5 from 5 to 50 inclusive 
// (i.e. 5, 10, 15, 20 ...)
let num = 5;
while (num <= 50) {
    if (num % 5 === 0) {
        console.log(num);
    }
    num ++;
}
console.log("===== end of exercise 5 ====");

// Exercise 6. Declare a variable called 'flavors' that is an array of 3 ice cream flavors
let flavors = ["chocolate", "stawberry", "coffee"];
console.log(flavors);
console.log("===== end of exercise 6 ====");

// Exercise 7. Update the second element of the array to be a different value
flavors[1] = "vanilla";
console.log(flavors);
console.log("===== end of exercise 7 ====");

// Exercise 8. Add 2 more items to the array
flavors.push("Mint chocolate chip", "Buttered Pecan");
console.log(flavors);
console.log("===== end of exercise 8 ====");


// Exercise 9. Write a function called multiply that takes in 3 numbers, and returns
// the product of the 3 numbers multiplied together
function multiply(num1, num2, num3) {
    multiplyNumber = num1 * num2 * num3;
    console.log(multiplyNumber);
}
multiply(5,1,10);
console.log("===== end of exercise 9 ====");

// Exercise 10. Write a function that takes in an integer. The function should print all
// integers from 1 to that number. Next to each one it should print whether 
// it is even or odd. For example, if the number is 4, print:
// 1 odd
// 2 even
// 3 odd
// 4 even
function oddEvenNumber(int) {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) console.log(i + " even")
        else console.log(i + " odd")
    }
}
oddEvenNumber(10)
console.log("===== end of exercise 10 ====");

// Exercise 11. Make an object called pet that contains 2 properties:
// animal (representing what type of animal the pet is)
// age (representing the age of the pet)
let pet = {
    type: "rabbit",
    age: 2
}
console.log(pet)
console.log("===== end of exercise 11 ====");


// Exercise 12. Print the pet's age
console.log(pet.age);
console.log("===== end of exercise 12 ====");


// Exercise 13. Update pet's age to be a different value
pet.age = 3;
console.log(pet.age);
console.log("===== end of exercise 13 ====");


// Exercise 14. In the comments below, write a sentence explaining what each of the following data types are.
// String is primitive data type. The character in the string need to be wrap arround with " ".
// Number can be positive number, negative number, or dicimal.
// Boolean has the value of true/false or 0/1.
// Array is a special variable, which can hold more than one value at a time. Array can contain String, Number, Boolean, other Array, and object.
// Object are variable but can contain many values. The values are written as name : value pairs.
// undefined is a variable has not been assigned a value, or not declared at all.
console.log("===== end of exercise 14 ====");

//Exercise 15 Add. a new file to the $PATH environmental variable
let pathEnv = "export PATH=$PATH:$HOME/scripts";
console.log(pathEnv);
console.log("===== end of exercise 15 ====");

//Exercise 16. 
/*
Please explain how the internet works? Your answer should include answers to the following questions: 
    - The Internet works through a packet routing network in accordance with the Internet Protocol (IP), the Transport Control Protocol (TCP) and other protocols.
How are the devices on the internet physically connected to each other?
    - Devices on the Internet connected to each other by public IP address.
How is information physically transmitted from device to device?
    - Computers transmitted and exchanged data with each other using telecommunications network. The networked computing devices pass data to each other along network links (data connections). The connections between nodes are established using either cable media or wireless media. The best-known computer network is the Internet.
How does one device find another it’s trying to communicate with?
    - The networked computing devices pass data to each other along network links (data connections). The connections between nodes are established using either cable media or wireless media. The best-known computer network is the Internet.
What methods do devices on the internet use to communicate?
    - in the old day devices simply transmit data as a bit stream. However, most information in computer networks is carried in packets. A network packet is a formatted unit of data (a list of bits or bytes, usually a few tens of bytes to a few kilobytes long) carried by a packet-switched network.
*/
console.log("===== end of exercise 16 ====");

// The following questions are bonus questions! Only work on them once you’ve finished all other questions.


// Bonus 1. Write a function that takes in a string and returns the number of times the 
// character "a" appears in the string.
/*
let str = "I want to say aaa is something";
    let repeatLetter = str.match(/a/g);
    console.log(repeatLetter);
    console.log(typeof repeatLetter);
for (let i = 0; i < repeatLetter.length; i++) {
    console.log(i);
}
NOT WORKING
*/
function countRepeatLetter(str) {
    let result =  str.match(/a/gi).length;
    console.log(result);
}
countRepeatLetter("I want to say aaa is something")
console.log("===== end of bonus 1 ====")


// Bonus 2. Write a function that takes a string and returns which character appears the 
// most times in the string.
function mostAppear() {
    let cat = "cat is ccccat";
    let maxChar = "";
    let count = maxChar(cat) = 'c';
    console.log(count);
}
//NOT WORKING
// mostAppear();
// console.log(maxChar());
console.log("===== end of bonus 2 ====")


