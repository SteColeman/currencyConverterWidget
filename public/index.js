//settings for fetch get request
let settings = { method: "Get" };
//global vars that need resetting each time the api is pinged
// var fromCurrency;
// var toCurrency;
// var fromAmount;

document.getElementById('send').addEventListener('click', getConversion)

function getConversion() {

    //base currency 
    var fromCurrency = document.getElementById('baseCurrency').value.toUpperCase() //add toUpperCase()
    //currency to convert into
    var toCurrency =  document.getElementById('toCurrency').value.toUpperCase(); //add toUpperCase()
    //amount of base currency to convert
    var fromAmount =  document.getElementById('amount').value;

    //api link with currency variables set 
    var api = 'https://api.getgeoapi.com/v2/currency/convert?api_key=ae69e404bebee939d172f40d10a54f77be475ffa&from=' + fromCurrency + '&to=' + toCurrency;

    fetch(api, settings)
    //response put into json format
    .then(res => res.json())
    .then((json) => {

        //check to see if the api response status has succeeded or failed. if it fails the API error message is displayed
        if(json.status === 'failed') {
            document.getElementById('finalValue').innerHTML = json.error.message;

            //if response status doesnt fail, continue with currency conversion
        } else {
        //get the currency rate from the api and wrap in variable
        var currencyRate = json.rates[toCurrency].rate;

        //base currency full name
        var fromCurrencyTitle = json.base_currency_name;

        //to currency full title
        var toCurrencyTitle = json.rates[toCurrency].currency_name;

        //multiply users entered amount by currency rate to 
        var returnableAmount = currencyRate * fromAmount;

        //set the returned amount to 2 decimal places
        returnableAmount = returnableAmount.toFixed(2);
        
        //push the returned values to the dom
        document.getElementById('finalValue').innerHTML = fromAmount + ' ' + fromCurrencyTitle + ' = ' + returnableAmount + ' ' + toCurrencyTitle;
        document.getElementById('singleValue').innerHTML = '1 ' + fromCurrency + ' = ' + currencyRate + ' ' + toCurrency;
        }
    });

}
