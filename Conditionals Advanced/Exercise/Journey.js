function journey(input){

    let budget = Number(input[0]);
    let season = input[1];
    let destination; 
    let expenses;
    let accomodationtype;

    //accomodation types:

    let hotel = "Hotel";
    let camping = "Camp";

    //destinations:
    let Bulgaria = "Bulgaria";
    let Balkans = "Balkans";
    let Europe = "Europe";

if(budget<=100){

destination = Bulgaria;

    switch(season){

         case "summer":expenses = budget*0.30;accomodationtype = camping;break;
         case "winter":expenses = budget*0.70;accomodationtype = hotel;break;

    }
}
else if(budget<=1000){

    destination = Balkans;
    switch(season){

        case "summer":expenses = budget*0.40;accomodationtype = camping; break;
        case "winter":expenses = budget*0.80;accomodationtype = hotel; break;

   }


}

else{

    destination = Europe;
    accomodationtype = hotel;
    switch(season){

    case "summer":
    case"winter":expenses = budget*0.90;break;

}

}
console.log(`Somewhere in ${destination}`);
console.log(`${accomodationtype} - ${(expenses.toFixed(2))}`);

}
journey(["1500", "summer"])