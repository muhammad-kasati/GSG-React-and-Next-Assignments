// Task 4: Product interface and total price calculation
// Define an interface for a Product with `name` and `price` properties
interface Product {
  name: string;
  price: number;
}

// Function to calculate the total price of products
// Takes an array of Product objects and returns the total price
const calculateTotalPrice = (products: Product[]): number => {
  return products.reduce((total, product) => total + product.price, 0);
};

// Example array of products
const products: Product[] = [
  { name: 'Apple', price: 10 },
  { name: 'Banana', price: 5 },
  { name: 'Orange', price: 8 }
];

// Call the function and print the result
console.log(calculateTotalPrice(products)); // Output: 23

// Task 5: Validate email address
// Function to check if a given string is a valid email
// Uses a regular expression to verify the email format
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for basic email validation
  return emailRegex.test(email); // Returns true if the email is valid, otherwise false
};

// Test cases for email validation
console.log(isValidEmail('Muhammadkasati@gmail.com')); // Output: true
console.log(isValidEmail('Muhammadkasati-gmail'));     // Output: false

/*
  Instructions to run this TypeScript code:
  1. Compile the TypeScript code to JavaScript using the TypeScript compiler:
     `tsc product.ts`
  2. This will generate a JavaScript file named `product.js`.
  3. Run the compiled JavaScript file using Node.js:
     `node product.js`
  4. The output will be printed in the console.
*/

