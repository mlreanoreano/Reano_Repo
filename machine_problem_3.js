// Task 1: User Input
const principal = parseFloat(prompt("Enter the principal amount (P):"));
const rate = parseFloat(prompt("Enter the annual interest rate (R) in percentage:"));
const time = parseFloat(prompt("Enter the time period (T) in years:"));

// Task 2: Calculate Simple Interest
const simpleInterest = (principal * rate * time) / 100;

// Task 3: Calculate the Total Amount
const totalAmount = principal + simpleInterest;

// Task 4: Display the Results
console.log(`Simple Interest: ${simpleInterest}`);
console.log(`Total Amount: ${totalAmount}`);
