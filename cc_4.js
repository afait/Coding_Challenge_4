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
let stock = 10; // Declared Inentory Stock as 10
console.log("Initial Stock Value", stock)
while (stock > 0) { // Subtracts from stock until stock balance is 0
    console.log(`Stock left: ${stock}`); // Shows the amount of stock left
    stock-- // Decreases by one, allowing your computer to NOT crash
};
