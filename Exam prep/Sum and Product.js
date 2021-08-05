function sumAndProduct(input){

    let n = input[0];

    for (let a = 1; a <= 9; a++) {

        for (let b = 9; b >= a; b--) {

            for (let c = 0; c <= 9; c++) {

                for (let d = 9; d >= c; d--){
           

                    let sum = a+b+c+d;
                    let mult = a*b*c*d;

                    if (sum === mult && n % 10 == 5) {

                        console.log(`${(a*1000)+(b*100)+(c*10)+(1*d)}`);
                        return;
                        
                    }

                    else if (mult/sum === 3 && n % 3 == 0 ) {

                        console.log(`${(1000*d)+(100*c)+(10*b)+(1*a)}`);
                        return;
                        
                    }
              
                }
                
                
            }
            
        }
        
    
    }
    console.log("Nothing found");
}
sumAndProduct(["123"])