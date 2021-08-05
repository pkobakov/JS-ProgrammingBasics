function leapYears(input){
let startYear = Number(input[0]);
let endYear = Number(input[1]);

for(let i = startYear; i<=endYear; i++){

if(i%4==0){

    console.log(i);
}

}

}
leapYears(["2000","2011"]);