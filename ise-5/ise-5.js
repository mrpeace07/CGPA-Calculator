// Function to calculate GPA
function calculateGPA() {
    const gradePoints = {
        'S': 10,
        'A': 9,
        'B': 8,
        'C': 7,
        'D': 6,
        'E': 5,
        'F': 0
    };

    let totalPoints = 0;
    let totalCredits = 0;

    // Iterate over each subject
    for (let i = 1; i <= 8; i++) {
        const grade = document.getElementById(`subject-${i}`).value;
        let credits;

        // Get credits based on the subject
        switch (i) {
            case 1: // Computer Networks
            case 2: // Database Management Systems
            case 3: // System Software
            case 4: // Java Programming
                credits = 4;
                break;
            case 5: // Professional Elective 1
            case 6: // Open Elective 1
                credits = 3;
                break;
            case 7: // DBMS Laboratory
            case 8: // Computer Networks Laboratory
                credits = 1.5;
                break;
            default:
                credits = 0;
        }

        totalPoints += gradePoints[grade] * credits;
        totalCredits += credits;
    }

    // Calculate GPA
    const gpa = totalPoints / totalCredits;
    document.getElementById('result').innerText = `Your GPA is: ${gpa.toFixed(2)}`;
}

// Add event listeners to buttons
document.getElementById('calculateGPA').addEventListener('click', calculateGPA);
document.getElementById('resetBtn').addEventListener('click', () => {
    document.getElementById('result').innerText = '';
    const selects = document.querySelectorAll('select.grade');
    selects.forEach(select => select.selectedIndex = 0); // Reset all selects to the first option
});
