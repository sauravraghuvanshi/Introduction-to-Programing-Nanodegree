/*
 * Programming Quiz: Out to Dinner
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables - `bill`, `tip`,
 *    and `total`
 * 2. Your variables - `bill`, `tip`, and `total` should be 
 *.   declared using the `const` keyword
 * 3. Your variable `bill` should be a number, having a value 
 *.   equal to the result of `10.25 + 3.99 + 7.15`
 * 4. Your variable `tip` should be a number, having a value 
 *    equal to 15% of the `bill`
 * 5. Your variable `total` should be a number, having a value 
 *.   equal to the `bill` and `tip` added together
 * 6. Your code should print the total to the console
 */
 
// your code goes 

const bill = 10.25 + 3.99 + 7.15;
const tip = bill * 0.15;
const total = bill + tip;

console.log("$" + total.toFixed(2))