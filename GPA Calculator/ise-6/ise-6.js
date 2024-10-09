document.getElementById('calculateGPA').addEventListener('click', calculateGPA);

function calculateGPA() {
    let totalCredits = 0;
    let totalGradePoints = 0;

    // Array of subject IDs
    const subjects = [
        { id: 'subject-1', credits: 4 },
        { id: 'subject-2', credits: 5 },
        { id: 'subject-3', credits: 3 },
        { id: 'subject-4', credits: 3 },
        { id: 'subject-5', credits: 3 },
        { id: 'subject-6', credits: 3 },
        { id: 'subject-7', credits: 1.5 },
        { id: 'subject-8', credits: 1.5 },
        { id: 'subject-9', credits: 2 }
    ];

    subjects.forEach(subject => {
        const grade = document.getElementById(subject.id).value;
        const credits = subject.credits;

        if (grade) {
            const gradePoint = getGradePoint(grade);
            totalCredits += credits;
            totalGradePoints += (gradePoint * credits);
        }
    });

    const gpa = totalGradePoints / totalCredits;
    document.getElementById('gpaResult').textContent = `GPA: ${gpa.toFixed(2)}`;
}

function getGradePoint(grade) {
    switch (grade) {
        case 'S': return 10;
        case 'A': return 9;
        case 'B': return 8;
        case 'C': return 7;
        case 'D': return 6;
        case 'E': return 5;
        case 'F': return 0;
        default: return 0;
    }
}
