function readText(text){


    let index = 0;
    let word = text[index]

    while(word != "Stop"){

          console.log(word);
          index++;
          word = text[index];
         

    }

}

readText(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"]);
