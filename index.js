//import node fetch to get the api data
import fetch from 'node-fetch';
let settings = { method: "Get" };

//base currency 
var fromCurrency = 'gbp'; //add toUpperCase()
//currency to convert into
var toCurrency = "USD"; //add toUpperCase()
//amount of base currency to convert
var fromAmount = 5;

//api link with currency variables set 
var api = 'https://api.getgeoapi.com/v2/currency/convert?api_key=ae69e404bebee939d172f40d10a54f77be475ffa&from=' + fromCurrency + '&to=' + toCurrency

fetch(api, settings)
.then(res => res.json())
.then((json) => {

    //get the currency rate from the api and wrap in variable
    var currencyRate = json.rates[toCurrency].rate;

    //multiply users entered amount by currency rate to 
    var returnableAmount = Number(currencyRate) * fromAmount;
    console.log(returnableAmount);

});
