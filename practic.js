function calculateFactorial(n) {
    // Check if the input is a positive integer
    if (n < 0 || Math.floor(n) !== n) {
      return "Input must be a positive integer.";
    }
  
    // Initialize the factorial result to 1
    let factorial = 1;
  
    // Calculate the factorial using a for loop
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
  
    return factorial;
  }
  
  // Example usage:
  const inputNumber = 5;
  const result = calculateFactorial(inputNumber);
  console.log(`The factorial of ${inputNumber} is ${result}`);
  