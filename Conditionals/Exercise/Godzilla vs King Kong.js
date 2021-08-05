function godzillaVsKingKong(input)
{
let budget = Number(input[0]);
let statistsCount = Number(input[1]);
let costumePrice = Number(input[2]);
let decor = budget*0.10;

if(statistsCount>150)
  {
      costumePrice-=costumePrice*0.10; 
  }

  costumePrice = costumePrice*statistsCount;

  let totalExpenses = costumePrice+decor; 

  if(totalExpenses<=budget)
  {

     console.log("Action!");
     console.log(`Wingard starts filming with ${(budget-totalExpenses).toFixed(2)} leva left.`);

  }

  else
  {

    console.log("Not enough money!");
    console.log(`Wingard needs ${Math.abs(totalExpenses-budget).toFixed(2)} leva more.`);
  }
}


godzillaVsKingKong([9587.88,222,55.68]);