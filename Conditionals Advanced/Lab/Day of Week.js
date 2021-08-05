function dayOfweek(input){

    let day = Number(input[0]);
    let dayName;

    switch(day){

        case 1: dayName = "Monday"; break;
        case 2: dayName = "Tuesday"; break;
        case 3: dayName = "Wednesday"; break;
        case 4: dayName = "Thursday"; break;
        case 5: dayName = "Friday"; break;
        case 6: dayName = "Saturday"; break;
        case 7: dayName = "Sunday"; break;
        default: dayName = "Error"; break;
    }

    console.log(dayName);
}

dayOfweek([54])