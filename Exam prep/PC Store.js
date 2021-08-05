function pcStore(input){
let processorPrice = Number(input[0]);
let videocardPrice = Number(input[1]);
let ramPrice = Number(input[2]);
let ramCount = Number(input[3]);
let discount = Number(input[4]);
let rate = 1.57;
let moneyNeeded = 0.0;



processorPrice*=rate;
videocardPrice*=rate;
ramPrice*=rate;

let totalRamPrice = ramPrice*ramCount;

processorPrice -=processorPrice*discount;
videocardPrice -= videocardPrice*discount;

moneyNeeded = processorPrice+videocardPrice+totalRamPrice;

console.log(`Money needed - ${(moneyNeeded).toFixed(2)} leva.`);

}

pcStore(["200",
"100",
"80",
"1",
"0.01"])


