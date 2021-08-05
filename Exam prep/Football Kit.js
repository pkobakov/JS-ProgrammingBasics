function footballKit(input){

    let tshirt = Number(input[0])
    let sumNeeded = Number(input[1])

    let shorts = tshirt*0.75;
    let socks = shorts*0.20;
    let boots = 2*(tshirt+shorts);

    let sum = tshirt+shorts+socks+boots;
    sum -= sum*0.15; 

    if (sum>=sumNeeded) {

        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${(sum).toFixed(2)} lv.`);
        
    } 
    
    else {

        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${(sumNeeded-sum).toFixed(2)} lv. more.`);
        
    }


}
footballKit(["55",
"310"])

