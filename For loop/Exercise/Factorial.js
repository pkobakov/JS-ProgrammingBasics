function factorial(input){
    let inputNumber = Number(input[0]);
    let result = 1 ;

    for(let i = 1; i<= inputNumber; i++){

         result*=i;
               

    }

    console.log(result);
}
factorial(["4"])