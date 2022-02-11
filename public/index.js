//settings for fetch get request
let settings = { method: "Get" };
//base currency 
var fromCurrency = document.getElementById('baseCurrency').value.toUpperCase() //add toUpperCase()
//currency to convert into
var toCurrency =  document.getElementById('toCurrency').value.toUpperCase(); //add toUpperCase()
//amount of base currency to convert
var fromAmount =  document.getElementById('amount').value;



document.getElementById('send').addEventListener('click', getConversion())
// document.getElementById('send').on('click', getConversion())

function getConversion() {

    //api link with currency variables set 
    var api = 'https://api.getgeoapi.com/v2/currency/convert?api_key=ae69e404bebee939d172f40d10a54f77be475ffa&from=' + fromCurrency + '&to=' + toCurrency

    fetch(api, settings)
    .then(res => res.json())
    .then((json) => {
        console.log(api);
        console.log(json);
        //check to see if the api response status has succeeded or failed. if it fails the API error message is displayed
        if(json.status === 'failed') {
            document.getElementById('finalValue').innerHTML = json.error.message;

        } else {

        //get the currency rate from the api and wrap in variable
        var currencyRate = json.rates[toCurrency].rate;

        //multiply users entered amount by currency rate to 
        var returnableAmount = currencyRate * fromAmount;
        returnableAmount = returnableAmount.toFixed(2)

        document.getElementById('finalValue').innerHTML = fromCurrency + ' ' + fromAmount + ' is equal to: ' + returnableAmount + ' ' + toCurrency;
        console.log(returnableAmount);
        }
    });

}
