let age = prompt("Please enter your age:");

age = parseInt(age); // Convert the input to an integer

if (isNaN(age) || age < 0) {
    // Check if the input is not a number or if it's negative
    console.log("Invalid input! Please enter a valid age.");
} else {
    switch (true) {
        case (age >= 0 && age <= 5):
            console.log("Ticket Price: Free (0 PHP)");
            break;
        case (age >= 6 && age <= 12):
            console.log("Ticket Price: 50 PHP");
            break;
        case (age >= 13 && age <= 17):
            console.log("Ticket Price: 100 PHP");
            break;
        case (age >= 18 && age <= 59):
            console.log("Ticket Price: 200 PHP");
            break;
        case (age >= 60):
            console.log("Ticket Price: 150 PHP");
            break;
        default:
            console.log("Invalid age input!");
            break;
    }
}
