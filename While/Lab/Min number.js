function minNum(input){
    let inputElement = input[0];
    let index = 1;
    let minNum = Number.MAX_SAFE_INTEGER;

    while(inputElement != "Stop"){

        let num = Number(inputElement);
        if(num<minNum){

            minNum = num;
        }

        inputElement = input[index];
        index++;
    }

    console.log(minNum);

}
minNum(["-5000","-4000","-3000","-2000","-1000","Stop"]);

