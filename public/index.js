//run code through lintjs.com 
//add a docblock at the top and remove a fair amount of inline commenmts

//settings for fetch get request
let settings = { method: "Get" };

document.getElementById("send").addEventListener("click", getConversion);

function getConversion() {

    //base currency
    let fromCurrency = document.getElementById("baseCurrency").value.toUpperCase();
    //currency to convert into
    let toCurrency =  document.getElementById("toCurrency").value.toUpperCase();
    //amount of base currency to convert
    let fromAmount =  document.getElementById("amount").value;

    //api link with currency letiables set
    let api = "https://api.getgeoapi.com/v2/currency/convert?api_key=ae69e404bebee939d172f40d10a54f77be475ffa&from=" + fromCurrency + "&to=" + toCurrency;

    //using the fetch api interface to grab the information from the getgeo api
    fetch(api, settings)
    //response put into json format
    .then((res) => res.json())
    .then((json) => {

        //check to see if the api response status has succeeded or failed. if it fails the API's generated error message is displayed
        if(json.status === "failed") {
            document.getElementById("finalValue").innerHTML = json.error.message;

        //if response status doesnt fail, continue with currency conversion
        } else {
        //get the currency rate from the api and wrap in letiable 
        let currencyRate = json.rates[toCurrency].rate;

        //base currency full name
        let fromCurrencyTitle = json.base_currency_name;

        //to currency full title
        let toCurrencyTitle = json.rates[toCurrency].currency_name;

        //multiply users entered amount by currency rate to
        let returnableAmount = currencyRate * fromAmount;

        //set the returned amount to 2 decimal places
        returnableAmount = returnableAmount.toFixed(2);

        //push the returned values to the dom
        document.getElementById("finalValue").innerHTML = fromAmount + " " + fromCurrencyTitle + " = " + returnableAmount + " " + toCurrencyTitle;
        document.getElementById("singleValue").innerHTML = "1 " + fromCurrency + " = " + currencyRate + " " + toCurrency;
        }
    });

}
