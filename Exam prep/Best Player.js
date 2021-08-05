     
function bestPlayer(input){
    let index=0;
    let max=0;
    let best;
    while(input[index]!="END"){
        let name=input[index];
        let goals=Number(input[index+1]);
        if(goals>max) {max=goals;
            best=name;}
        if(max>=10) break;
        index+=2;
    }
    console.log(`${best} is the best player!`);
    if(max>=3) console.log(`He has scored ${max} goals and made a hat-trick !!!`);
    else console.log(`He has scored ${max} goals.`);
}

bestPlayer(["Silva",
"5",
"Harry Kane",
"10"])


