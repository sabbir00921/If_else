// Class     grade    point
// 96-100	    A+	    5.00
// 80–100	    A+	    5.00	
// 70-79	    A	    4.00	          
// 60–69	    A-	    3.50	
// 50–59	    B	    3.00	
// 40–49	    C	    2.00	
// 33-39	    D	    1.00	
// 0-32	        F	    0.00
const Result = document.getElementById("Result")
let marks = +prompt("Enter your marks");

if (isNaN(marks) || marks < 0 || marks > 100 || marks == " " ) {
    confirm("Please enter only number between 0 to 100");
    window.location.reload();
}
else{
    if (marks >= 0 && marks <= 32) {
        Result.innerHTML += "your grade is 'F'"
    }
    else if (marks >= 33 && marks <= 39) {
        Result.innerHTML += "your grade is 'D'"
    }
    else if (marks >= 40 && marks <= 49) {
        Result.innerHTML += "your grade is 'C'"
    }
    else if (marks >= 50 && marks <= 59) {
        Result.innerHTML += "your grade is 'B'"
    }
    else if (marks >= 60 && marks <= 69) {
        Result.innerHTML += "your grade is 'A-'"
    }
    else if (marks >= 70 && marks <= 79) {
        Result.innerHTML += "your grade is 'A'"
    }
    else if (marks >= 80 && marks <= 100) {
        Result.innerHTML += "your grade is 'A+'"
    }
    else {
        Result.innerHTML += "404 not found/There is an syestem error"
    }
    
}
