// Task 1 If Statements
let purchaseAmount = 300
console.log("purchaseAmount:", purchaseAmount); // set purchase amount to 50
if (purchaseAmount > 100) {
    purchaseAmount -= 50
}; // Now gives a $50 discount if the purchaseAmount is greater than $100
console.log(`Final amount after discount: ${purchaseAmount}`); // console log the purchase amount after discount using a template literal

// Task 2 - Sales Report
let sales = [100, 200, 150, 100, 400]; // Defined five sales amounts
let totalSales = 0; // starts totalSales at 0
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i]
}; // will continue to add the sales data until it includes all of them
console.log(`Total Sales: ${totalSales}`); // logs totalSales amount after calculation

// Task 3 - Inventory Depletion
let stock = 10; // Declared Inventory Stock as 10
console.log("Initial Stock Value", stock)
while (stock > 0) { // Subtracts from stock until stock balance is 0
    console.log(`Stock left: ${stock}`); // Shows the amount of stock left
    stock-- // Decreases by one, allowing your computer to NOT crash
};

// Task 4 - Customer Survey
let responses = 0; //Declared initial amount of responses as 0 
do{
    console.log(`Number of responses, ${responses}`); // logs the number of responses total throughout the loop
    responses++
} while (responses <= 3); // Will continue to log responses until there are three

// Task 5 - Employee Information
let employee = {
    Name: "Cinderella",
    Position: "Maid",
    Salary: 20000
}; // Assign properties to the employee
for (let property in employee) {
    console.log(`${property}: ${employee[property]}`);
} // Log each property of the employee in a separate line

// Task 6 - Product Listings
let products = ["Soap", " Vacuum", " Mop"]; // Create three products for sale
for (let product of products) {
    console.log(`Products for sale: ${products}`);
} // Display the three products in a line using a template literal

// Task 7 - Order Processing
let orders = [100, 101, 102]; // Declare theree order ID numbers
orders.forEach((order, index) => {
    console.log(`Order ${index + 1}: $${order}`); // Displays each of the three orders and their cooresponding prices
});

// Task 8 - Tax Application
function calculateTax(amount) {
    return amount * .05; // will calculate the amount of tax charged on an order using a 5% tax rate
}
console.log(`Calculated Tax: ${calculateTax(5000)}`); // Will return 5% of tax on the 5000 amount

// Task 9 - Discount Application
function applyDiscount(price) {
    return price - (price * .10); // Will calculate the amount of discount
}
console.log(`Discounted Price: ${applyDiscount(1000)}`); // Applys the discount based on a price of 10000

// Task 10 - Loyalty Points
const calculatePoints = (purchaseAmount) => {
    return (purchaseAmount * .10); // Will calculate the number of points earned given that one point is earned for every $10 spent
}
let points = calculatePoints(100);
console.log(`Points Earned: ${points}`); // Logs the number of Loyalty points earned using the calculation