function areaOfFigures(input) {

    let figure = input[0];
    let sideA = Number(input[1]);
    let sideB = Number(input[2]);
    let result;

   switch(figure){

    case "square":result = sideA*sideA; break;
    case "rectangle":result = sideA*sideB; break;
    case "circle":result = Math.PI*(Math.pow(sideA,2)); break;
    case "triangle":result = (sideA*sideB)/2; break;

   }
    
   console.log(result.toFixed(3));
}

areaOfFigures(["triangle",4.5, 20]);