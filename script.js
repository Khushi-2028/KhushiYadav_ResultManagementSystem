function generateResult() {

try {

let name = document.getElementById("name").value.trim();
let roll = document.getElementById("roll").value.trim();
let course = document.getElementById("course").value;
let semester = document.getElementById("semester").value.trim();
let attendance = Number(document.getElementById("attendance").value);

let marks = [
Number(document.getElementById("sub1").value),
Number(document.getElementById("sub2").value),
Number(document.getElementById("sub3").value),
Number(document.getElementById("sub4").value),
Number(document.getElementById("sub5").value)
];

let subjects = [
"Subject 1",
"Subject 2",
"Subject 3",
"Subject 4",
"Subject 5"
];

if(name.length < 3)
throw "Name must contain at least 3 characters.";

if(!/^[0-9]+$/.test(roll))
throw "Roll Number must be numeric.";

if(attendance < 0 || attendance > 100)
throw "Attendance must be between 0 and 100.";

for(let i=0;i<marks.length;i++){

if(isNaN(marks[i]))
throw subjects[i] + " marks cannot be empty.";

if(marks[i] < 0 || marks[i] > 100)
throw subjects[i] + " marks must be between 0 and 100.";
}

let total = 0;

for(let i=0;i<marks.length;i++){
total += marks[i];
}

let percentage = (total/5).toFixed(2);

let grade;

if(percentage >= 90)
grade = "A+";
else if(percentage >= 80)
grade = "A";
else if(percentage >= 70)
grade = "B";
else if(percentage >= 60)
grade = "C";
else if(percentage >= 50)
grade = "D";
else
grade = "F";

let division;

if(percentage >= 60){

if(percentage >= 75)
division = "First Division";

else
division = "First Division";

}
else if(percentage >= 45){

if(percentage >= 50)
division = "Second Division";
else
division = "Second Division";

}
else if(percentage >= 33){

division = "Third Division";

}
else{

division = "Fail";

}

let resultStatus = "PASS";

for(let i=0;i<marks.length;i++){

if(marks[i] < 33){

resultStatus = "FAIL";
break;

}
}

let scholarship;

if(percentage >= 85 && attendance >= 75)
scholarship = "Eligible for Scholarship";
else
scholarship = "Not Eligible for Scholarship";

let highest = marks[0];
let lowest = marks[0];

let highestSub = subjects[0];
let lowestSub = subjects[0];

let passedSubjects = 0;
let distinctionCount = 0;

let i = 0;

while(i < marks.length){

if(marks[i] > highest){

highest = marks[i];
highestSub = subjects[i];

}

if(marks[i] < lowest){

lowest = marks[i];
lowestSub = subjects[i];

}

if(marks[i] >= 33)
passedSubjects++;

if(marks[i] >= 75)
distinctionCount++;

i++;
}

let remarks;

if(percentage >= 90)
remarks = "Outstanding Performance";
else if(percentage >= 80)
remarks = "Excellent Performance";
else if(percentage >= 70)
remarks = "Very Good Performance";
else if(percentage >= 60)
remarks = "Good Performance";
else if(percentage >= 50)
remarks = "Average Performance";
else
remarks = "Needs Improvement";

let fee;

switch(course){

case "MERN Stack":
fee = "₹25,000";
break;

case "Python Development":
fee = "₹15,000";
break;

case "Data Science":
fee = "₹35,000";
break;

case "Artificial Intelligence & Machine Learning":
fee = "₹40,000";
break;

case "Cyber Security":
fee = "₹30,000";
break;

default:
fee = "N/A";

}
let reportHTML = `


<h2>Result Report</h2>

<table>

<tr><th>Name</th><td>${name}</td></tr>
<tr><th>Roll Number</th><td>${roll}</td></tr>
<tr><th>Course</th><td>${course}</td></tr>
<tr><th>Semester</th><td>${semester}</td></tr>
<tr><th>Course Fee</th><td>${fee}</td></tr>

<tr><th>Total Marks</th><td>${total}</td></tr>
<tr><th>Percentage</th><td>${percentage}%</td></tr>
<tr><th>Grade</th><td>${grade}</td></tr>
<tr><th>Division</th><td>${division}</td></tr>
<tr><th>Status</th><td>${resultStatus}</td></tr>

<tr><th>Highest Subject</th><td>${highestSub} (${highest})</td></tr>
<tr><th>Lowest Subject</th><td>${lowestSub} (${lowest})</td></tr>
<tr><th>Passed Subjects</th><td>${passedSubjects}</td></tr>
<tr><th>Distinction Subjects</th><td>${distinctionCount}</td></tr>

<tr><th>Scholarship</th><td>${scholarship}</td></tr>
<tr><th>Remarks</th><td>${remarks}</td></tr>

</table>

`;

let newWindow = window.open("", "_blank");

newWindow.document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Student Result Report</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial, sans-serif;
}

body{
background:linear-gradient(135deg,#667eea,#764ba2);
padding:30px;
min-height:100vh;
}

.report-container{
max-width:1000px;
margin:auto;
background:white;
padding:30px;
border-radius:15px;
box-shadow:0 5px 20px rgba(0,0,0,0.3);
}

h1{
text-align:center;
margin-bottom:20px;
color:#2c3e50;
}

table{
width:100%;
border-collapse:collapse;
margin-top:20px;
}

th{
background:#4f46e5;
color:white;
padding:12px;
text-align:left;
}

td{
padding:12px;
background:#eef2ff;
}

table,th,td{
border:1px solid #c7d2fe;
}

tr:nth-child(even) td{
background:#dbeafe;
}

.home-btn{
display:inline-block;
margin-top:25px;
padding:12px 25px;
background:#16a34a;
color:white;
text-decoration:none;
border-radius:8px;
font-weight:bold;
}

.home-btn:hover{
background:#15803d;
}

.print-btn{
display:inline-block;
margin-top:25px;
margin-left:10px;
padding:12px 25px;
background:#2563eb;
color:white;
border:none;
border-radius:8px;
cursor:pointer;
font-weight:bold;
}

.print-btn:hover{
background:#1d4ed8;
}

</style>
</head>

<body>

<div class="report-container">

<h1>Student Result Report</h1>

${reportHTML}

<br>

<a href="index.html" class="home-btn">
Back to Home
</a>

<button class="print-btn" onclick="window.print()">
Print Report
</button>

</div>

</body>
</html>
`);

newWindow.document.close();

}
catch(error){

console.log(error);
alert(error);

}
}