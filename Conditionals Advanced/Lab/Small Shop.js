function smallShop(input)
{
    let product = input[0];
    let town = input[1];
    let amount = input [2];
    let result= 0.0;
switch(product)
{
   case "coffee": 
   switch(town)
   {
case "Sofia":result = amount*0.50;break;
case "Plovdiv":result = amount*0.40;break;
case "Varna":result = amount*0.45 ;break;
   };
   
   break;

   case "water":   
   switch(town)
   {
case "Sofia":result = amount*0.80;break;
case "Plovdiv":result = amount*0.70;break;
case "Varna": result = amount*0.70;break;
   };;
   
   break;

   case "beer":   switch(town)
   {
case "Sofia":result = amount*1.20;break;
case "Plovdiv":result = amount*1.15;break;
case "Varna": result = amount*1.10;break;
   }; 


   break;

   case "sweets":    switch(town)
   {
case "Sofia":result = amount*1.45;break;
case "Plovdiv":result = amount*1.30;break;
case "Varna": result = amount*1.35;break;
   };
   
   ;break;

   case "peanuts":    switch(town)
   {
case "Sofia":result = amount*1.60;break;
case "Plovdiv":result = amount*1.50;break;
case "Varna": result = amount*1.55;break;
   };
   
   ;break;

   default: result = "Error"; break;
}

console.log(result);

}

smallShop(["coffee","Varna","2"])
;