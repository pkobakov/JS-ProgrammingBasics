function hotelRoom(input){

    let month = input[0];
    let nigths= input[1];
    let apartmentPrice;
    let studioPrice;
    

    switch(month){

        case "May":
            case"October":

         apartmentPrice = 65;
           studioPrice = 50;

           if(nigths>7&&nigths<=14){

               studioPrice *= 0.95;

            }

            else if(nigths>14){

                studioPrice *= 0.70;
            }
           break;
               
            
            case "June":
                    case "September":
                        apartmentPrice = 68.70;
                        studioPrice = 75.20;

                        if(nigths>14){
                             
                            studioPrice *= 0.80;

                        }
                        break;
                        
                    
                    
                    case "July":
                            case "August": 
                            apartmentPrice = 77;
                            studioPrice = 76; 
                            break;





    }

    if(nigths>14){

        apartmentPrice *= 0.90;

    }

             console.log(`Apartment: ${(apartmentPrice*nigths).toFixed(2)} lv.`);
             console.log(`Studio: ${(studioPrice*nigths).toFixed(2)} lv.`);

}

hotelRoom(["August", "20"]);