document.getElementById('calculateGPA').addEventListener('click', calculateGPA);
document.getElementById('resetBtn').addEventListener('click', resetGrades);

function calculateGPA() {
    const subjects = [
        { credits: 4, id: 'subject-1' },
        { credits: 4, id: 'subject-2' },
        { credits: 3, id: 'subject-3' },
        { credits: 3, id: 'subject-4' },
        { credits: 2.5, id: 'subject-5' },
        { credits: 2.5, id: 'subject-6' },
        { credits: 1, id: 'subject-7' },
        { credits: 1, id: 'subject-8' }
    ];

    let totalPoints = 0;
    let totalCredits = 0;

    subjects.forEach(subject => {
        const grade = document.getElementById(subject.id).value;
        const credits = subject.credits;

        // Convert grade to points
        const points = gradeToPoints(grade);
        
        // Calculate total points and total credits
        totalPoints += points * credits;
        totalCredits += credits;
    });

    // Calculate GPA
    const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
    
    // Display result
    document.getElementById('result').innerText = `Your GPA is: ${gpa}`;
}

function gradeToPoints(grade) {
    switch (grade) {
        case 'S': return 10;
        case 'A': return 9;
        case 'B': return 8;
        case 'C': return 7;
        case 'D': return 6;
        case 'E': return 5;
        case 'F': return 0;
        default: return 0; // In case of invalid grade
    }
}

function resetGrades() {
    const selects = document.querySelectorAll('.grade');
    selects.forEach(select => {
        select.selectedIndex = 0; // Reset to first option
    });
    document.getElementById('result').innerText = ''; // Clear result
}
