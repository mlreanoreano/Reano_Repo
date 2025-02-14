// Task 1: Declare Variables
let userName = "Jerry Smith"; // string
let userAge = 31; // number
let isLoggedIn = true; // boolean
let userScores = [85, 91, 78, 92]; // array of numbers
let userProfile = { 
    name: "Jerry Smith", 
    age: 31, 
    isActive: true 
};
// Task 2: Output Values
console.log("User Name:", userName);
console.log("User Age:", userAge);
console.log("Is Logged In:", isLoggedIn);
console.log("User Scores:", userScores);
console.log("User Profile:", userProfile);

// Part 2: Operations

// Task 1: Arithmetic Operations
let num1 = 10;
let num2 = 5;

let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;

console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);

// Task 2: String Concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);

// Part 3: Type Checking

// Task 1: Check and Print Data Types
console.log("Data Type of userName:", typeof userName);
console.log("Data Type of userAge:", typeof userAge);
console.log("Data Type of isLoggedIn:", typeof isLoggedIn);
console.log("Data Type of userScores:", typeof userScores);
console.log("Data Type of userProfile:", typeof userProfile);

// Part 4: Extra Challenge

// Task 1: Object Property Access
console.log("User Profile - Name:", userProfile.name);
console.log("User Profile - Age:", userProfile.age);
console.log("User Profile - Active Status:", userProfile.isActive);