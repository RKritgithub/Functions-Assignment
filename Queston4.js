// Q4. Write a JavaScript function called calculateTax that takes an income as an argument and returns the
// amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
// function with various incomes.

function calculateTax(income) {
    return function() {
        let taxRate;

        if (income <= 30000) {
            taxRate = 0.1; // 10% tax
        } else if (income <= 100000) {
            taxRate = 0.2; // 20% tax
        } else {
            taxRate = 0.3; // 30% tax
        }

        return income * taxRate;
    };
}

const taxForIncome1 = calculateTax(25000)();
console.log(taxForIncome1); // Output: 2500 

const taxForIncome3 = calculateTax(120000)();
console.log(taxForIncome3); // Output: 36000


