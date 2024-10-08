// Function to calculate GPA
function calculateGPA() {
    const grades = {
        'S': 10,
        'A': 9,
        'B': 8,
        'C': 7,
        'D': 6,
        'E': 5,
        'F': 0
    };

    let totalCredits = 0;
    let totalPoints = 0;

    // Get subject grades and credits
    const subjects = [
        { id: 'subject-1', credits: 4 },
        { id: 'subject-2', credits: 5 },
        { id: 'subject-3', credits: 3 },
        { id: 'subject-4', credits: 3 },
        { id: 'subject-5', credits: 3 },
        { id: 'subject-6', credits: 1.5 },
        { id: 'subject-7', credits: 1.5 },
        { id: 'subject-8', credits: 2 }
    ];

    subjects.forEach(subject => {
        const grade = document.getElementById(subject.id).value;
        const credit = subject.credits;
        
        totalCredits += credit;
        totalPoints += grades[grade] * credit; // Calculate total points based on grade and credits
    });

    // Calculate GPA
    const gpa = totalPoints / totalCredits;
    document.getElementById('result').innerText = `Your GPA is: ${gpa.toFixed(2)}`;
}

// Function to reset the form
function resetForm() {
    const subjects = [
        'subject-1',
        'subject-2',
        'subject-3',
        'subject-4',
        'subject-5',
        'subject-6',
        'subject-7',
        'subject-8'
    ];

    subjects.forEach(subject => {
        document.getElementById(subject).selectedIndex = 0; // Reset to first option
    });

    document.getElementById('result').innerText = ''; // Clear result
}

// Add event listeners to buttons
document.getElementById('calculateGPA').addEventListener('click', calculateGPA);
document.getElementById('resetBtn').addEventListener('click', resetForm);
