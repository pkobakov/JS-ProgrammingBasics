function numInRange(input){

    let inputNum =Number(input[0]);


    if(inputNum != 0 && inputNum>=-100 && inputNum <=100){

        console.log("Yes")
    }

    else if(inputNum == 0 || (inputNum <-100 && inputNum >100)){

        console.log("No");

    }
}

numInRange([0])