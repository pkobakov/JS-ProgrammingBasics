function budget (input)
{
  let rent = Number(input[0]);
  let cakePrice = rent*0.20;
  let drinks = cakePrice*0.55;
  let entertainer  = rent/3;
  let needeSum = rent+cakePrice+drinks+entertainer
  console.log([needeSum]);
}
 budget(["3720"]);
