function rakia(input){

    let days = Number(input[0]);
    let counter = 1;
    let liters = 0;
    let degrees = 0.0;
    

    



for (let i = 1; i <= days; i++) {
    
    let currentLiters = Number(input[counter]);
    let currentDegrees = Number(input[counter+1]);

    liters += currentLiters;
    degrees += currentLiters*currentDegrees;  

    counter+=2;
}
let average = degrees/liters;

console.log(`Liter: ${(liters).toFixed(2)}`);
console.log(`Degrees: ${(average).toFixed(2)}`)

if (average<38) {

    console.log("Not good, you should baking!" );
}

else if (average>=38&&average<=42) {
    console.log("Super!" );
    
}

else if (average>42) {
    
    console.log("Dilution with distilled water!" )
}


}



rakia(["2",
"200",
"43",
"200",
"40"])

