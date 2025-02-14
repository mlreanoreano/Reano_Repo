// Step 1: Outer loop for the rows (1 to 10)
for (let row = 1; row <= 10; row++) {
  // Step 2: Inner loop for the columns (1 to 10)
  let rowResult = ""; 
  for (let column = 1; column <= 10; column++) {
      // Step 3: Calculate the product of the row and column
      rowResult += `${row} * ${column} = ${row * column}\t`; 
  }
  // Step 4: Print the result for the current row and move to the next line
  console.log(rowResult);
}
