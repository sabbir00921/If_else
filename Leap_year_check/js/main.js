//Leap year check 
// here is the code using 3 types of function.

const year = prompt("Enter a year to check leap year or not") // Assin the valu here
const yearArr = [2024, 3526, 6544, 6540, 7987, 6546,]; // Assin the valu here

//
console.log("Normal Function Output")
function leapYear(year) {
    for (let i = 0; i < yearArr.length - 1; i++) {
        if (year[i] % 4 == 0) {
            leap = console.log(`${year[i]} is a leap year`);
        }
        else {
            leap = console.log(`${year[i]} is not a leap year`);
        }
    }
    return leap;
}
leapYear(yearArr)

// //aerrow function
console.log("aerrow Function Output")
leapYear = (year) => {
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
console.log("annoynimous Function Output")
leapYear = function (year) {
    if (year % 4 == 0) {
        leap = console.log(`${year} is a leap year`);
    }
    else {
        leap = console.log(`${year} is not a leap year`);
    }
    return leap;
}
leapYear(year)