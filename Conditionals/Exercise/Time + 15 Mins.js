function timePlus15Mins(input)
{
   let hour = Number(input[0]);
   let min = Number(input [1]);
   let  minsNeeded;
   let result; 
   if(min+15>59)
   {
       hour++;
       minsNeeded = 60-min;
       min = 15-minsNeeded;

   }

   else
   {

        min+=15;

   }

   if(hour == 24)
   {
       
    hour = 0;
   }

   if(min<10)
   {

     result = `${hour}:0${min}`;
   }
   
   else
   {
      result = `${hour}:${min}`;

   }

   console.log(result);
}

timePlus15Mins([12, 49])

