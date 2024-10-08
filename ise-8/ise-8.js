// Get references to the subject dropdowns and buttons
let subjects = [
    document.getElementById('subject-1'),
    document.getElementById('subject-2'),
    document.getElementById('subject-3')
];
let calculateGPA = document.getElementById('calculateGPA');
let resetbtn = document.getElementById('resetBtn');

// Function to reset all dropdowns and results
const resetFields = () => {
    subjects.forEach(subject => subject.value = '');
    document.getElementById('result').innerText = '';
};

// Function to calculate GPA
const calculateGPAValue = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    const gradePoints = {
        'S': 10,
        'A': 9,
        'B': 8,
        'C': 7,
        'D': 6,
        'E': 5,
        'F': 0 // Assuming F does not contribute to GPA
    };

    const credits = [3, 4, 4]; // Assuming the credits for each subject

    // Check if all subjects have a selected grade
    for (let i = 0; i < subjects.length; i++) {
        let grade = subjects[i].value;
        if (grade === "") {
            alert("Please select a grade for all subjects.");
            return; // Exit the function if any subject is unselected
        }
        totalPoints += gradePoints[grade] * credits[i];
        totalCredits += credits[i];
    }

    // Calculate GPA
    let gpa = totalPoints / totalCredits;
    document.getElementById('result').innerText = `Your GPA is ${gpa.toFixed(2)}`;
};

// Add event listeners for buttons
calculateGPA.addEventListener('click', calculateGPAValue);
resetbtn.addEventListener('click', resetFields);

// Initial setup (if necessary)
resetFields(); // Reset fields on page load
