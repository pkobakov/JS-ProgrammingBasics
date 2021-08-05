function metricConverter(input){
    let inputNumber = Number(input[0]);
    let inputMetric = input[1];
    let outputMetric = input[2];

    let result;
    
    if(inputMetric == "mm"){ 
        
        if(outputMetric == "cm")
        {
            
             result = inputNumber/10;

        }

        else if(outputMetric == "m"){

            result = inputNumber/1000;
        }


    }
    else if(inputMetric == "cm")
    {

        if(outputMetric == "mm"){

            result = inputNumber*10;

        }

        else if(outputMetric == "m"){
            
             result = inputNumber/100;

        }

    }

    else if(inputMetric == "m"){

        if(outputMetric == "mm"){

            result = inputNumber*1000;

        }

        else if(outputMetric == "cm"){
            
             result = inputNumber*100;

        }

    }

    console.log(result.toFixed(3));
}

metricConverter([1201.34,"mm","cm"]);