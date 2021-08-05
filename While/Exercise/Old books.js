function oldBooks(input){

    let favoriteBook = input[0];
    let currentBook = input[1];
    let inputLength = input.length;
    let index = 1;
    let counter = 0;


    while(favoriteBook != currentBook )
    {
        if (inputLength <= counter){

            break;
        }

        if(currentBook == "No More Books"){

            break;
        }
        index++;
        currentBook = input[index];
        counter++;
        
       
    }

    if(currentBook == "No More Books"){

        console.log("The book you search is not here!");
        console.log(`You checked ${counter} books.`);
    }

    else{

        console.log(`You checked ${counter} books and found it.`);
    }

}
oldBooks
(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])




