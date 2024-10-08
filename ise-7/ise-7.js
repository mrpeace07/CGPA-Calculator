// Function to calculate GPA based on selected grades
function calculateGPA() {
    // Map of grades to points
    const gradePoints = {
        'S': 10,
        'A': 9,
        'B': 8,
        'C': 7,
        'D': 6,
        'E': 5,
        'F': 0
    };

    // Select all grade dropdowns
    const gradeSelects = document.querySelectorAll('.grade');
    
    let totalPoints = 0;
    let totalSubjects = 0;

    // Loop through each select element to calculate total points
    gradeSelects.forEach(select => {
        const grade = select.value;
        if (grade in gradePoints) {
            totalPoints += gradePoints[grade];
            totalSubjects++;
        }
    });

    // Calculate GPA
    const gpa = totalSubjects > 0 ? (totalPoints / totalSubjects).toFixed(2) : 0;

    // Display the result
    document.getElementById('result').innerText = `Your GPA is: ${gpa}`;
}

// Function to reset the form
function resetForm() {
    // Reset all grade dropdowns to the first option
    const gradeSelects = document.querySelectorAll('.grade');
    gradeSelects.forEach(select => select.selectedIndex = 0);

    // Clear the result display
    document.getElementById('result').innerText = '';
}

// Event listeners for buttons
document.getElementById('calculateGPA').addEventListener('click', calculateGPA);
document.getElementById('resetBtn').addEventListener('click', resetForm);
