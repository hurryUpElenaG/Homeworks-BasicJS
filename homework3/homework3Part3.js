
//Without using prompt
function withdrawMoney(amount) {
    let currentAccountBalance = 1000;

    if(isNaN(amount)){  
        return "Invalid amount entered.";
    }

    if (amount > currentAccountBalance) {
        return "Not enough money";
    } else {
        currentAccountBalance -= amount;
        return `You withdrew ${amount} Denars. The current balance on your account is: ${currentAccountBalance} Denars.`;
    }
}

console.log(withdrawMoney(500)); 


//BONUS:with using prompt
function withdrawMoney() {
    let currentAccountBalance = 1000;
    let amount = parseInt(prompt("Enter amount to withdraw:"));

    if(isNaN(amount)){
        alert("Invalid amount entered.");
        return "Invalid amount entered.";
    }

    if (amount > currentAccountBalance) {
        alert("Not enough money");
        return "Not enough money";
    } else {
        currentAccountBalance -= amount;
        let message = `You withdrew ${amount} Denars. The current balance on your account is: ${currentAccountBalance} Denars.`;
        alert(message);
        return message;
    }
}

console.log(withdrawMoney());