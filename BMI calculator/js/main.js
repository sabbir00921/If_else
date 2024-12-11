// o	Underweight: BMI < 18.5
// o	Normal weight: BMI 18.5 - 24.9
// o	Overweight: BMI 25 - 29.9
// o	Obese: BMI 30 or greater



const weight = +prompt("Enter Weight in KG");
const height = +prompt("Enter height in Inchi");

const heightMeter = height * 0.0254; // Inchi to meter conversion.

bmiCalculation = weight / (heightMeter ** 2) // BMI calculation.
const BMI = bmiCalculation.toFixed(2); // Display onlt two float values.
if (BMI < 18.5) {
    console.log(BMI, "Underweight");
}
else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log(BMI, "Normal weight");
}
else if (BMI >= 25 && BMI <= 29.9) {
    console.log(BMI, "Overweight");
}
else if (BMI >= 30) {
    console.log(BMI, "Obese");
}
else {
    console.log("Please confirm all is okay");
}