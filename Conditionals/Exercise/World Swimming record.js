function theNewRecord(input){
    let recentRecordInSeconds = Number(input[0]);
    let distance = Number(input[1]);
    let timePerMeter = Number(input[2]);
    

    let timePerDistance = distance*timePerMeter;
    let distanceModifier = Math.floor(distance/15);
    let additionalTime = distanceModifier*12.5;

    let totalTime =(timePerDistance+additionalTime).toFixed(2);

    if(totalTime>=recentRecordInSeconds){
        let timeDifference = (totalTime-recentRecordInSeconds).toFixed(2);
        console.log(`No, he failed! He was ${timeDifference} seconds slower.`)
    }

    else{

        console.log(`Yes, he succeeded! The new world record is ${totalTime} seconds.`);
    }
}

theNewRecord(["10464",
"1500",
"20"])


