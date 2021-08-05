function concatenateData(input)
{
    let firstName = input[0];
    let familyName = input[1];
    let age = Number(input[2]);
    let town = input[3];
    let result = "You are "+ firstName +" "+ familyName + ', ' + "a " + age + "-years old person from " + town + '.' 
    console.log(result);
}
concatenateData(["Maria","Ivanova", 20, "Sofia"])