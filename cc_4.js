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
