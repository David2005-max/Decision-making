function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}

// Example usage:
let year = parseInt(prompt("Enter a year:"));
alert(isLeapYear(year));


function ticketPrice(age) {
    if (age <= 12) {
        return "The ticket price is $10.";
    } else if (age >= 13 && age <= 17) {
        return "The ticket price is $15.";
    } else {
        return "The ticket price is $20.";
    }
}

// Example usage:
let age = parseInt(prompt("Enter your age:"));
alert(ticketPrice(age));
