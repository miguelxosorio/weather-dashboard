// Assigning the key to a variable
const APIKey = "a0e0cce6bbb236d2d9e640863e8da2f1";

// Assigning a variable to the API
// var queryURL = "api.openweathermap.org/data/2.5/weather?q="+ "London" + "&appid="+ APIKey;
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=" + APIKey;
console.log(queryURL);
// const kelvinToCelsius = 273.15; //If temp is standardized to Kelvin, we need to convert it to Celsius

// targeting where the current weather display should be
var currentDayEl = document.getElementById('currentday');
const today = moment().format('LLLL'); // formating how the date should look like 
console.log(today); // console logging how the date appears
// date looks like "Wednesday, December 15, 2021 2:58 PM"

// Declaring variables to target HTML elements
let searchBoxEl = document.getElementById('enter-city');
let searchBtnEl = document.getElementById('search-btn');

var init = function() {

    fetch(queryURL)
    .then(response => response.json())
    .then(data => console.log(data));

    document.getElementById('date').innerHTML = "Need Dynamic Date";
    document.getElementById('temperature').innerHTML = "Temperature";
    document.getElementById('humidity').innerHTML = "Humidity";
    document.getElementById('windspeed').innerHTML = "Wind Speed";
    document.getElementById('uv').innerHTML = "UV-Index";

    document.getElementById('card1').innerHTML = "Needs Dynamic Forecast";
    document.getElementById('card2').innerHTML = "Needs Dynamic Forecast";
    document.getElementById('card3').innerHTML = "Needs Dynamic Forecast";
    document.getElementById('card4').innerHTML = "Needs Dynamic Forecast";
    document.getElementById('card5').innerHTML = "Needs Dynamic Forecast";

};
searchBtnEl.addEventListener("click", init);

