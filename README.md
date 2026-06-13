# Smart Student Result Management System

A web-based Student Result Management System developed using HTML, CSS, and JavaScript that automates result generation, grade calculation, division determination, scholarship eligibility checking, subject performance analysis, and academic remark generation.

# Project Overview

The Smart Student Result Management System is designed to simplify academic result processing. The application collects student details and subject marks, validates all inputs, performs calculations, and generates a professional result report card.

This project demonstrates practical implementation of core JavaScript concepts including variables, arrays, functions, loops, conditional statements, DOM manipulation, event handling, validation, and exception handling.

# Features

## Student Information Module

* Student Name
* Roll Number
* Course Selection
* Semester Details
* Attendance Percentage

## Academic Result Processing

* Total Marks Calculation
* Percentage Calculation
* Grade Determination
* Division Calculation
* Pass/Fail Evaluation

## Scholarship Eligibility Checker

Eligibility Conditions:

* Percentage ≥ 85%
* Attendance ≥ 75%

## Subject Performance Analysis

* Highest Scoring Subject
* Lowest Scoring Subject
* Passed Subjects Count
* Distinction Subjects Count

## Academic Remarks Generator

| Percentage | Remark                  |
| ---------- | ----------------------- |
| 90+        | Outstanding Performance |
| 80–89      | Excellent Performance   |
| 70–79      | Very Good Performance   |
| 60–69      | Good Performance        |
| 50–59      | Average Performance     |
| Below 50   | Needs Improvement       |

## Course Fee Information

Implemented using JavaScript Switch Statement.

| Course                                     | Fee     |
| ------------------------------------------ | ------- |
| MERN Stack                                 | ₹25,000 |
| Python Development                         | ₹15,000 |
| Data Science                               | ₹35,000 |
| Artificial Intelligence & Machine Learning | ₹40,000 |
| Cyber Security                             | ₹30,000 |

## Report Card Features

* Professional Result Report
* Separate Report Window
* Back To Home Button
* Print Report Option
* Responsive Design

# Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### JavaScript Concepts Used

1.Variables

2.Arrays

3.Functions

4.if Statement

5.if-else Statement

6.else-if Ladder

7.Nested if Statements

8.Switch Statement

9.for Loop

10.while Loop

11.DOM Manipulation

12.Event Handling

13.Form Validation

14.Exception Handling

# Project Structure

```text
KhushiYadav_ResultManagementSystem
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── screenshots
    ├── home-page1.png
    ├── home-page2.png
    ├── filled-details1.png
    ├── filled-details2.png
    ├── report-generated-page.png
    ├── BackToHome_PrintReport.png
    └── report-download-page.png
```
# How To Run The Project

## Step 1

Clone the repository:

```bash
git clone https://github.com/your-username/KhushiYadav_ResultManagementSystem.git
```

## Step 2

Open the project folder.

## Step 3

Run:

```text
index.html
```

in any modern web browser.

## Step 4

Fill in:

* Student Details
* Attendance
* Subject Marks

## Step 5

Click:

```text
Generate Result
```

to generate the report card.

# Validation Rules

## Student Name

* Cannot be empty
* Minimum 3 characters

## Roll Number

* Numeric values only

## Attendance

* Must be between 0 and 100

## Subject Marks

* Cannot be empty
* Cannot be negative
* Cannot exceed 100

---

# Exception Handling

The application uses JavaScript exception handling to prevent crashes caused by invalid input.

```javascript
try {
   // Result Processing Logic
}
catch(error){
   alert(error);
}
```
# Learning Outcomes

This project provides hands-on experience in:

* Front-End Web Development
* JavaScript Programming
* Control Statements
* Arrays and Functions
* Form Validation
* DOM Manipulation
* Dynamic Report Generation
* Exception Handling
* Problem Solving Using JavaScript

# Author

**Khushi Yadav**

B.Tech Student

Project Title:

**Smart Student Result Management System**

---

