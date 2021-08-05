function sumNumbers(input){

let matchNum =Number (input[0]);;
let inputNum = Number(input[1]);
let sum = Number(inputNum);

let index = 2;

while (matchNum > sum) {
 
    inputNum = Number(input[index]);
    sum+=inputNum;
    index++;
}
console.log(sum);

}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"
]);