function competition(input){

    let dancers = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input [3];

    let award = 0.0;

if (place == "Bulgaria") {

    award = dancers*points;

    switch(season){

        case "summer": award-=award*0.05;break;
        case "winter":award-=award*0.08;break;
        default:break;
    }
    
}

else if (place == "Abroad"){

award = dancers*points;
award+=award*0.50;

switch(season){

    case "summer":award-=award*0.10;break;
    case "winter":award-=award*0.15;break;
    default:break;
}

}

let charity = award*0.75;
award-=charity;

console.log(`Charity - ${(charity).toFixed(2)}`);
console.log(`Money per dancer - ${(award/dancers).toFixed(2)}`);

}

competition(["25",
"98",
"winter",
"Bulgaria"])

