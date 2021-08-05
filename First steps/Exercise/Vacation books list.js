function bookList(input)
{
 let totalPagesCount = Number(input[0]);
 let dailyPages = Number(input[1]);
 let days = Number(input[2]);
 let result = (totalPagesCount/dailyPages)/days;
 console.log(result);
}

bookList(["432","15","4"])

