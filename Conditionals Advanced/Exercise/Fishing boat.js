function fishingBoat(input){
let budget = Number(input[(0)]);
let season = input[1];
let fishersCount = Number(input[2]);

let total;

//seasons:
 let spring = "Spring";
 let summer = "Summer";
 let autumn = "Autumn";
 let winter = "Winter";

 //boat rent prices:

 let springPrice = 3000;
 let summerPrice = 4200;
 let winterPrice = 2600;

  if(season == spring){

      if(fishersCount<= 6){

        springPrice *= 0.90;

      }

      else if(fishersCount >= 7 && fishersCount <= 11){
         
         springPrice *= 0.85;
         
      }
      else {

         springPrice *= 0.75;
      }

      total = springPrice;

  }

  else if(season == summer||season== autumn){

    if(fishersCount<=6){

      summerPrice*=0.90;

    }

    else if(fishersCount >= 7 && fishersCount <= 11){
         
        summerPrice *= 0.85;
        
     }
     else {

        summerPrice *= 0.75;
     }

    total = summerPrice;
  }
    else if(season == winter){

        if(fishersCount<=6){
  
          winterPrice*=0.90;
  
        }

        else if(fishersCount >= 7 && fishersCount <= 11){
         
            winterPrice *= 0.85;
            
         }
         else {
   
            winterPrice *= 0.75;
         }

  
        total =  winterPrice;
  
    }

    if(fishersCount %2 == 0 && season != "Autumn"){

        total *=0.95;
    }

    if(budget >= total){

        console.log(`Yes! You have ${(budget-total).toFixed(2)} leva left.`);
    }

    else{

        console.log(`Not enough money! You need ${Math.abs(total-budget).toFixed(2)} leva.`);
    }

}
 


fishingBoat(["3000","Summer","11"]);