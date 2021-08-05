function multiTable(input){

    let multiplier = input[0];

    for(let i = 1; i<=10; i++){

        let result = `${i} * ${multiplier} = ${i*multiplier}`;

            console.log(result);
    }

}

multiTable(["5"]);