const num1= +prompt("Enter Frist Number");
const num2= +prompt("Enter Second Number");
if(num1>num2){
    console.log(`Number-1 = ${num1} is grater than number-2 = ${num2}`)
}
else if(num1<num2){
    console.log(`Number-2 = ${num2} is grater than number-1 = ${num1}`)
}
else{
    console.log("Both are equal")
}
