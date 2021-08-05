function countTheWords(input){

let counter = 0;
let message = input[0];
let messageLength = message.length;

for(let i = 0; i < messageLength; i++){

    

     if(message[i] === ' '){


            counter++;

      }
 
}

if(counter+1<=10){

    console.log("The message was sent successfully!");
}

else{


    console.log(`The message is too long to be send! Has ${counter+1} words.`);
}

}



countTheWords(["This message has exactly eleven words. One more as it's allowed!"])