function usdToBgn(input)
{
    let rate = 1.79549;
    let usd = input[0];
    let result = usd*rate;
    console.log(result);
}

usdToBgn(["100"]);
