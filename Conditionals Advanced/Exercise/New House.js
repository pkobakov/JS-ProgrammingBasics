function newHouse(input){
    let flowerType = input[0];
    let flowersCount = input[1];
    let budget = input[2];

  //flower types:
    let roses = "Roses";
    let dahlias = "Dahlias";
    let tulips = "Tulips";
    let nascissus = "Narcissus";
    let gladiolus = "Gladiolus";

    //flower prices:
    let rosePrice = 5.00;
    let dahliaPrice = 3.80;
    let tulipPrice = 2.80;
    let narcissusPrice = 3.00;
    let gladiolusPrice = 2.50;

    let total;

    if(flowerType == roses){

        if( flowersCount> 80){

            rosePrice*=0.90;
           
        }

        total = rosePrice*flowersCount;

    }

    else if (flowerType == dahlias){
        
        if(flowersCount> 90){

            dahliaPrice*=0.85;
        }
    
        total = dahliaPrice*flowersCount;
    
    } 

    else if(flowerType == tulips){

        if(flowersCount> 80){
            tulipPrice*=0.85;

        }

        total = tulipPrice*flowersCount;
    } 
       

    else if(flowerType == nascissus){
        if(flowersCount < 120){
            narcissusPrice = narcissusPrice+(narcissusPrice*0.15);
        }

        total = narcissusPrice*flowersCount;

    }

    else if(flowerType == gladiolus){

        if(flowersCount < 80){

        gladiolusPrice = gladiolusPrice + (gladiolusPrice*0.20);
    }

        total = gladiolusPrice*flowersCount;

    }



        if(budget>=total){

            console.log(`Hey, you have a great garden with ${flowersCount} ${flowerType} and ${(budget-total).toFixed(2)} leva left.`);

        }

        else{

            console.log(`Not enough money, you need ${Math.abs(total-budget).toFixed(2)} leva more.`);

        }

}

newHouse(["Gladiolus", "64", "160"]);