"use strict";
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["Mango", "Orange", "Apple"];
// Test for equality and unequality with strings
console.log("is apple is equal to apple?");
console.log(apple == "apple");
console.log("\nis apple is not equal to apple?");
console.log(apple != "apple");
// Tests using lowercase functions
console.log("\n is APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\n is APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
// Numerical Test
console.log("\n is ten is equal to twenty?");
console.log(ten == twenty);
console.log("\n is ten is not equal to twenty?");
console.log(10 != twenty);
console.log("\n is 10 is greater then zero?");
console.log(ten > 0);
console.log("\n is twenty is less then ten?");
console.log(twenty < 10);
console.log("\n is 10 is greater then or equal to 5?");
console.log(10 >= 5);
console.log("\n is twenty is less then or equal to 1o?");
console.log(20 <= 10);
//Test using "and" & "or" operators
//using and "&&"
console.log("\n twenty is not equal to 10 and twenty is greater then 10?");
console.log(20 != ten && 20 > 10);
console.log("\n twenty is not equal to 10 and twenty is greater then 10?");
console.log(20 != ten && 20 > 30);
//using || "OR"
console.log("\n twenty is greater then 50 or 20 is equal to 20?");
console.log(20 < 50 || 20 == 20);
console.log("\n twenty is greater then 50 or 20 is not equal to 20?");
console.log(20 > 50 || 20 != 20);
//Test weather item an include in array
console.log("\n is Orange include in my fruits array?");
console.log(fruits.includes("Orange"));
//Not include
console.log("\n is Orange not include in my fruits array?");
console.log(!fruits.includes("Orange"));
