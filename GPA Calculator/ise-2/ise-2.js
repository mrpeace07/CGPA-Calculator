// Get elements for each subject grade and buttons
let subject1 = document.getElementById('subject-1');
let subject2 = document.getElementById('subject-2');
let subject3 = document.getElementById('subject-3');
let subject4 = document.getElementById('subject-4');
let subject5 = document.getElementById('subject-5');
let subject6 = document.getElementById('subject-6');
let subject7 = document.getElementById('subject-7');

let calculateGPA = document.getElementById('calculateGPA');
let resetbtn = document.getElementById('resetBtn');

// Add event listener for Calculate GPA button
calculateGPA.addEventListener('click', () => {
    let grades = [
        subject1.value,
        subject2.value,
        subject3.value,
        subject4.value,
        subject5.value,
        subject6.value,
        subject7.value
    ];

    // Check for empty fields
    const empty = (x) => x === "";
    for (let grade of grades) {
        if (empty(grade)) {
            alert('Enter all grades');
            return;
        }
    }

    // Check for incorrect input length
    const correct = (x) => x.length > 1;
    for (let grade of grades) {
        if (correct(grade)) {
            alert("Enter grades correctly");
            return;
        }
    }

    // Validate grade values
    const checkValue = (x) => {
        const validGrades = ['S', 'A', 'B', 'C', 'D', 'E', 'F'];
        if (!validGrades.includes(x)) {
            alert('Enter correct grades');
            return true;
        }
        return false;
    }

    for (let grade of grades) {
        if (checkValue(grade)) {
            return;
        }
    }

    let gpa = 0; // Initialize GPA score
    let totalCredits = 0; // Initialize total credits

    // Grade mapping
    const creditMapping = {
        'S': 10,
        'A': 9,
        'B': 8,
        'C': 7,
        'D': 6,
        'E': 5,
        'F': 0 // Changed F to 0 as per standard GPA calculation
    };

    const creditHours = [4, 4, 3, 3, 3, 2.5, 2.5]; // Corresponding credits for each subject

    // Calculate GPA
    for (let i = 0; i < grades.length; i++) {
        let grade = grades[i];
        if (creditMapping[grade] !== undefined) {
            gpa += creditMapping[grade] * creditHours[i];
            totalCredits += creditHours[i];
        }
    }

    // Calculate final GPA
    let result = totalCredits ? (gpa / totalCredits).toFixed(2) : 0; 
    document.getElementById('result').innerText = `Your GPA is: ${result}`;
});

// Add event listener for Reset button
resetbtn.addEventListener("click", () => {
    // Reset each subject grade
    for (let i = 1; i <= 7; i++) {
        document.getElementById(`subject-${i}`).value = '';
    }
    document.getElementById('result').innerText = ''; // Clear result display
});
