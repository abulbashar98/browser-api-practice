
// Task 1
setTimeout(function () {
    console.log('First line of but coming at last because of timeout was set to 3.5s');
}, 3500)
console.log('Second line of code');
console.log('Third line of code');
console.log('Fourth line of code');
console.log('Fifth line of code');


// Task 2: Prompt

const addTwoHundred = () => {
    const amountText = prompt('Deposit Some money');
    // console.log(amountText);
    const amount = parseFloat(amountText);
    console.log(amount);
    if (isNaN(amount)) {
        alert('Input a number value');
    }
    else {
        let newAmount;
        newAmount = amount + 200;
        alert(`Current balance: ${newAmount}`)
    }
}

// Task 3: Confirm

const copyUrl = () => {
    const response = confirm('Do you want to copy the URL');
    if (response === true) {
        const url = window.location.href;
        alert(`URL: ${url}`)
    }
    else {
        alert('OK!!')
    }


}

