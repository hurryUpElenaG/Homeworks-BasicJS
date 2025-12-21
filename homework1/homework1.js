const numberOfPhones = 30;
const pricePerPhone = 119.95;
const taxRate = 0.05; // 5/100

const totalPrice = numberOfPhones * pricePerPhone
const totalTax = totalPrice * taxRate
const totalPriceWithTax = totalPrice + totalTax

console.log("The total price of 30 phones without tax is: $"+ totalPrice);
console.log("The total tax of 30 phones is: $"+ totalTax);
console.log("The total price of 30 phones with tax is: $"+ totalPriceWithTax);





