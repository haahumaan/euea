const SHORT_IF = 50000;

// Function to calculate the result
function calculateResult(shorif: number): number {
  // Check if shorif is greater than 0
  if (shorif > 0) {
    // Calculate the result
    const result = Math.sqrt(shorif);
    return result;
  } else {
    // Return an error message
    return "Error: shorif must be greater than 0";
  }
}

// Test the function
console.log(calculateResult(SHORT_IF));
