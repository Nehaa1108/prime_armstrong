function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function isArmstrong(num) {
    const digits = num.toString().split('');
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), power), 0);
    return sum === num;
}

function checkNumber() {
    const number = parseInt(document.getElementById('numberInput').value);
    let resultText = '';

    if (isNaN(number) || number < 0) {
        resultText = 'Please enter a valid non-negative number.';
    } else {
        resultText += `The number ${number} is `;
        resultText += isPrime(number) ? 'a prime number.<br>' : 'not a prime number.<br>';
        resultText += isArmstrong(number) ? 'The number is an Armstrong number.' : 'The number is not an Armstrong number.';
    }

    document.getElementById('result').innerHTML = resultText;
}