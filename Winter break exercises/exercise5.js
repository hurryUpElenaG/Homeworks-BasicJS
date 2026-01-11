
    let studentName = "Bob Bobsky";
    let math = 10;
    let english = 6;
    let science = 8;
    let sport = 9;
    let chemistry = 6;

    let average = (math + english + science + sport + chemistry) / 5;

    
    console.log(`Student's name: ${studentName}`);
    console.log(`Grades: Math - ${math}, English  - ${english}, Science - ${science}, Sport - ${sport}, Chemistry- ${chemistry}`);

    if (average >= 8) {
        alert(`CONGRATULATIONS! ${studentName} has passed the semester with average grade: ${average}!`);
        console.log(`CONGRATULATIONS! ${studentName} has passed the semester with average grade: ${average}!`);
    } else {
        alert(`UNFORTUNATELY ${studentName} has not passed the semester with average grade: ${average}!`);
        console.log(`UNFORTUNATELY ${studentName} has not passed the semester with average grade: ${average}!`);
    }



