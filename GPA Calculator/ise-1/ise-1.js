let subject1 = document.getElementById('subject-1');
let subject2 = document.getElementById('subject-2');
let subject3 = document.getElementById('subject-3');
let subject4 = document.getElementById('subject-4');
let subject5 = document.getElementById('subject-5');
let subject6 = document.getElementById('subject-6');
let subject7 = document.getElementById('subject-7');
let subject8 = document.getElementById('subject-8');
let calculateGPA = document.getElementById('calculateGPA');
let resetbtn = document.getElementById('resetBtn');

calculateGPA.addEventListener('click', () => {
    let grades = [
        subject1.value,
        subject2.value,
        subject3.value,
        subject4.value,
        subject5.value,
        subject6.value,
        subject7.value,
        subject8.value
    ];

    const empty = (x) => x === "";

    for (let grade of grades) {
        if (empty(grade)) {
            alert('Enter all grades');
            return;
        }
    }

    const correct = (x) => x.length > 1;

    for (let grade of grades) {
        if (correct(grade)) {
            alert("Enter grades correctly");
            return;
        }
    }

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

    const creditMapping = {
        'S': 10,
        'A': 9,
        'B': 8,
        'C': 7,
        'D': 6,
        'E': 5,
        'F': 4
    };

    const creditHours = [4, 4, 3, 3, 2.5, 2.5, 1, 1]; // Corresponding credits for each subject

    for (let i = 0; i < grades.length; i++) {
        let grade = grades[i];
        if (creditMapping[grade] !== undefined) {
            gpa += creditMapping[grade] * creditHours[i];
            totalCredits += creditHours[i];
        }
    }

    let result = totalCredits ? (gpa / totalCredits).toFixed(2) : 0; // Calculate final GPA

    document.getElementById('result').innerText = `Your GPA is ${result}`;
});

resetbtn.addEventListener("click", () => {
    for (let i = 1; i <= 8; i++) {
        document.getElementById(`subject-${i}`).value = '';
    }
    document.getElementById('result').innerText = '';
});
