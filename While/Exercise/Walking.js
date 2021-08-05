function walking(input){

    let goal = 10000;
    let stepsCommand = input[0];
    let index = 0; 
    let stepsSum = 0;

    while(stepsSum < goal){

        stepsCommand= input[index];
     
        if(stepsCommand == "Going home"){

            index++;
            stepsSum+=Number(input[index]);
            break;
        }

        else{

         
            stepsSum+=Number(input[index]);
            index++;
        }
    }

    if(stepsSum>=goal){

        console.log("Goal reached! Good job!");
        
        if(stepsSum> goal){

            console.log(`${stepsSum- goal} steps over the goal!`);
        }
    }

    else{

        console.log(`${goal-stepsSum} more steps to reach goal.`);
    }
}



walking
(["1000",
"1500",
"2000",
"6500"])





