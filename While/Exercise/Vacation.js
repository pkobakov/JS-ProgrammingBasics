function vacation(input){
    //data
    let budget = Number(input[0]);
    let disposable = Number(input[1]);

    //commands:
    let operation = input[2]; //`spend` or `save`
    let transaction = input[3]; //amount

    let operationIndex = 2;
    let transactionIndex = 3;
    let spendDays = 0;
    let days = 0;
    let cannotSave = false;

    while(operation !== undefined){



        if(operation == "spend"){

        days++;
        spendDays++;

             if(spendDays == 5){
             cannotSave = true;
             break;
            }

            disposable-=transaction;

            if(disposable <= 0 ){

                disposable = 0;
            }

        }

        else if(operation == "save"){
            spendDays = 0;
            days++;
            disposable+=transaction;
            
        }

        operationIndex+=2;
        transactionIndex+=2;
        operation = input[operationIndex];
        transaction = Number(input[transactionIndex]);
    }

    if(cannotSave){

        console.log("You can't save the money.");
        console.log(days);
    }

    else{

        console.log(`You saved the money for ${days} days.`);
    }
}

vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])









