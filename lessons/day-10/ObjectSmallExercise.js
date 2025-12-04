// Data
const teo = {name: "Teo", grades: [9,8,6]};

const ti = JSON.parse(JSON.stringify(teo));
ti.name = "Ti";
ti.grades = [8,8,9];

const tun = JSON.parse(JSON.stringify(teo));
ti.name = "Tun";
ti.grades = [6,7,8];

// Usage
const { bestStudentName, avgScrore} = findBestStudent([teo,ti,tun]);
console.log(`Best student is: ${bestStudentName} with average score: ${avgScrore}`);

// Controller
function findBestStudent(studentList){
    let bestStudent = studentList[0];
    let currentHighestScore = calculateAvgScore(bestStudent);

    for (const student of studentList){
        const avgScrore = calculateAvgScore(student);
        if(avgScrore > currentHighestScore){
            bestStudent = student;
            currentHighestScore = avgScrore;
        }
    }
    return {
        bestStudentName: bestStudent.name,
        avgScrore: currentHighestScore,
    }
}

// Support function
function calculateAvgScore({grades}){
    let totalScore = 0;
    for (const grade of grades){
        totalScore += grade;
        totalScore = totalScore + grade;
    }
    return Math.ceil(totalScore / grades.length);
}

// MVC - Model(Data) View(Usage) Controller

// Root cause: mostly from logic! Bug/Defect
// Debug
// Debug mode



