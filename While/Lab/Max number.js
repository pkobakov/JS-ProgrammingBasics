function maxNum(input){
    let inputElement = input[0];
    let index = 1;
    let biggestNum = Number.MIN_SAFE_INTEGER;

    while(inputElement != "Stop"){

        let num = Number(inputElement);
        if(num> biggestNum){

            biggestNum = num;
        }

        inputElement = input[index];
        index++;
    }

    console.log(biggestNum);

}
maxNum(["100",
"99",
"80",
"70",
"Stop"])
;