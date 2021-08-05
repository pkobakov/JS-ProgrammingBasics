function operator(input)
{

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operationType = input[2];

    let odd = "odd";
    let even = "even";
    let resultType;
 
    let result;
    //operationsTypes:

    let sub = "+";
    let dec = "-";
    let mult = "*";
    let div = "/";
    let mod = "%";

    if(operationType == sub || operationType == dec || operationType == mult){

        switch(operationType){

            case sub: result = num1+num2; break;
                case dec: result = num1-num2; break;
                    case mult: result = num1*num2; break;
                }

                if(result %2==0){
                   resultType = even;
                }

                else{
                    resultType = odd;

                }

          console.log(`${num1} ${operationType} ${num2} = ${result} - ${resultType}`);      

    }

    else if (operationType == div){

        if(num2 == 0)
        {

          console.log(`Cannot divide ${num1} by zero`);
        }

        else{

            result = (num1/num2).toFixed(2);

            console.log(`${num1} ${operationType} ${num2} = ${result}`);
        }


    }

    else if (operationType == mod){
        if(num2 == 0){

          console.log(`Cannot divide ${num1} by zero`);
        }

        else{
            result = num1%num2;

            console.log(`${num1} ${operationType} ${num2} = ${result}`);


        }

    }

}
operator(["123","12","/"])