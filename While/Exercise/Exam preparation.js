function examPrep(input){
    let badGrades = input[0];
    let problemName = input[1];
    let grade = Number(input[2]);
    let score = 0.0;
    let problemIndex = 1;
    let gradeIndex = 2;
    let counter = 3;
    let numberOfProblems = 0;
    let youNeedRest = false;

    let badGradesCounter = 0;

    while(problemName != "Enough"){
        
        if(counter>=input.length){

            break;
        }

        if(grade<=4){

            badGradesCounter++;

            if(badGradesCounter == badGrades){

               youNeedRest = true;
                break;
            }
        }

        numberOfProblems++;
        score+=grade;

        problemIndex+=2;
        gradeIndex+=2;

        problemName = input[problemIndex];
        grade = Number(input[gradeIndex]);

    }

if(youNeedRest){

console.log(`You need a break, ${badGradesCounter} poor grades.`);
}

else{

    problemName = input[problemIndex-2];

    let averageScore = Number(score/numberOfProblems).toFixed(2);
    console.log(`Average score: ${averageScore}`);
    console.log(`Number of problems: ${numberOfProblems}`);
    console.log(`Last problem: ${problemName}`);
}
}

examPrep(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

