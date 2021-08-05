function graduation(input)
{

    let name = input[0];
    let grades = 1;
    let sum = 0;
    let badGrade = 0;;
    let index = 0;


    while(grades<=12)
    {
        index++;
        let grade = Number(input[index]);

         if(grade < 4.00)
         {           
            badGrade++;

            if(badGrade >= 2){

                console.log(`${name} has been excluded at ${grades} grade`);
               return;
            }

            continue;
         }

      sum+=grade;
      grades++;
    }

 

        let average = Number(sum/12).toFixed(2);
        console.log(`${name} graduated. Average grade: ${average}`);
    

}

graduation
(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])
