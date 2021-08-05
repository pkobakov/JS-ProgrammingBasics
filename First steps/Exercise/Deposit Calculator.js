function depositCalculator(input)
{
let deposit = Number (input[0]);
let duration = Number(input[1]);
let rate = Number(input[2]/100);

let totalSum = deposit + duration * Number((deposit*rate)/12);
console.log(totalSum);
}

depositCalculator(["2350","6","7"]);



