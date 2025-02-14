// Function  sequence
function generateSequence() {
  // Prompt the user for the starting number, ending number, and step value
  let start = parseInt(prompt("Enter the starting number:"));
  let end = parseInt(prompt("Enter the ending number:"));
  let step = parseInt(prompt("Enter the step value (non-zero integer):"));

  // Check if  zero or invalid
  if (step === 0) {
      console.log("Step value must be a non-zero integer.");
      return;
  }

  // Handle positive and negative  values
  if (step > 0) {
      
      for (let i = start; i <= end; i += step) {
          console.log(i);
      }
  } else {
     
      for (let i = start; i >= end; i += step) {
          console.log(i);
      }
  }
}

// Call the function to run the program
generateSequence();
