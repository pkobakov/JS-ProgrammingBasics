function cinema(input){

    let type = input[0];
    let rows = input[1];
    let coloumns = input [2];
    let result = rows*coloumns;

    switch(type){

        case"Premiere": result = result*12.00;break;
        case "Normal":result = result*7.50; break;
        case "Discount": result =  result = result*5.00; break;
    }

    console.log(`${result.toFixed(2)} leva`);

}
cinema(["Premiere", "10","12"]);