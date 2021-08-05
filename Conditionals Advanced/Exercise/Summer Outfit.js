function summerOutfit(input){
let degrees = Number(input[0]);
let interval = input[1];
let outfit;
let shoes;

let shirt = "Shirt";
let sweatShirt = "Sweatshirt";
let tShirt = "T-Shirt";
let swimSuit = "Swim Suit";

let sneakers = "Sneakers";
let moccasins = "Moccasins";
let bareFoot = "Barefoot";
let sandals = "Sandals";

if(degrees<=10 || degrees<=18){

    switch(interval){

        case "Morning":
            outfit = sweatShirt;
            shoes =  sneakers;
            break;

        case "Afternoon":    
             outfit = shirt;
             shoes =  moccasins;;
             break;

        case "Evening":
            outfit = shirt;
            shoes =  moccasins;
            break;

        
    }

}

else if(degrees<18 || degrees<= 24){
    
    switch(interval){

        case "Morning":
            outfit = shirt;
            shoes = moccasins; 
            break;

        case "Afternoon":
            outfit = tShirt;
            shoes = sandals;
            break;

        case "Evening":
            outfit = shirt
            shoes = moccasins;
            break;


    }
}

else if (degrees>=25){

    switch(interval){

        case "Morning":
            outfit = tShirt;
            shoes = sandals;
            break;

        case "Afternoon":
            outfit = swimSuit;
            shoes = bareFoot;
            break;

        case "Evening":
            
            outfit = shirt
            shoes = moccasins;
            break;

    }
}

let result = `It's ${degrees} degrees, get your ${outfit} and ${shoes}.`;
console.log(result);

}
summerOutfit(["16", "Morning"]);