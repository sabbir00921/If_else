//Leap year check
const year = 2025; // Assin the valu here

//
function leapYear(year) {
    if (year % 4 == 0) {
        leap = console.log(`${year} is a leap year`);
    }
    else {
        leap = console.log(`${year} is not a leap year`);
    }
    return leap;
}
leapYear(year)

//aerrow function
leapYear = (year)=> {
    if (year % 4 == 0) {
        leap = console.log(`${year} is a leap year`);
    }
    else {
        leap = console.log(`${year} is not a leap year`);
    }
    return leap;
}
leapYear(year)

//annoynimous function
leapYear = function(year) {
    if (year % 4 == 0) {
        leap = console.log(`${year} is a leap year`);
    }
    else {
        leap = console.log(`${year} is not a leap year`);
    }
    return leap;
}
leapYear(year)