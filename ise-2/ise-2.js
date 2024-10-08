document.getElementById('calculateGPA').addEventListener('click', calculateGPA);
document.getElementById('resetBtn').addEventListener('click', resetGrades);

function calculateGPA() {
    // Define subjects and their respective credits
    const subjects = [
        { credits: 4, id: 'subject-1' },
        { credits: 4, id: 'subject-2' },
        { credits: 3, id: 'subject-3' },
        { credits: 3, id: 'subject-4' },
        { credits: 3, id: 'subject-5' },
        { credits: 2.5, id: 'subject-6' },
        { credits: 2.5, id: 'subject-7' }
    ];

    let totalPoints = 0;  // To hold the total grade points
    let totalCredits = 0;  // To hold the total credits

    subjects.forEach(subject => {
        const grade = document.getElementById(subject.id).value;  // Get the selected grade
        const credits = subject.credits;  // Get the credit for the subject

        // Convert grade to points
        const points = gradeToPoints(grade);

        // Update total points and total credits
        totalPoints += points * credits;
        totalCredits += credits;
    });

    // Calculate GPA
    const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;

    // Display the result
    document.getElementById('result').innerText = `Your GPA is: ${gpa}`;
}

// Function to convert grade to points
function gradeToPoints(grade) {
    switch (grade) {
        case 'S': return 10;
        case 'A': return 9;
        case 'B': return 8;
        case 'C': return 7;
        case 'D': return 6;
        case 'E': return 5;
        case 'F': return 0;
        default: return 0;  // In case of invalid grade
    }
}

// Function to reset grades
function resetGrades() {
    const selects = document.querySelectorAll('.grade');
    selects.forEach(select => {
        select.selectedIndex = 0;  // Reset to the first option
    });
    document.getElementById('result').innerText = '';  // Clear the result
}
