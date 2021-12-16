// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} - Open Weather Org doc

// Assigning the key to a variable
const APIKey = "a0e0cce6bbb236d2d9e640863e8da2f1";

// const kelvinToCelsius = 273.15; // If temp is standardized to Kelvin, we need to convert it to Celsius

// targeting where the current weather display should be
var currentDayEl = document.getElementById('currentday');
const today = moment().format('LLLL'); // formating how the date should look like 
console.log(today); // console logging how the date appears
// date looks like "Wednesday, December 15, 2021 2:58 PM"

// -------------------- Initial Function --------------------//

// Capturing the value of the <input> after clicking the search button
// declaring the button element as a variable
var searchBtnEl = document.getElementById('search-btn');
// Creating the function for the click
searchBtnEl.addEventListener("click", function(event){
    event.preventDefault();

    // creating a variable for the <input> and putting value in the entry
    let city = document.getElementById('enter-city').value;
    console.log(city);
    
    // setting up the value of the variable as a string template literal to capture the city text in <input> and fetch the data
    var cityURL_BASE = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
    
    fetch(cityURL_BASE)
     .then(response => response.json())
     .then(data => console.log(data));
    // place data as text content in the element

    // need current weather displayed dynamically

    // need temperature displayed dynamically

    // need humidity displayed dynamically

    // need windspeed displayed dynamically

    // need UV-Index displayed dynamically
    

})




/* base: "stations"
clouds: {all: 100}
cod: 200
coord: {lon: -97.7431, lat: 30.2672}
dt: 1639691802
id: 4671654
main:
feels_like: 299.04
humidity: 75
pressure: 1011
temp: 298.49
temp_max: 299.42
temp_min: 297.18
[[Prototype]]: Object
name: "Austin"
sys: {type: 2, id: 2003218, country: 'US', sunrise: 1639660850, sunset: 1639697569}
timezone: -21600
visibility: 10000
weather: Array(1)
0:
description: "overcast clouds"
icon: "04d"
id: 804
main: "Clouds"
[[Prototype]]: Object
length: 1
[[Prototype]]: Array(0)
wind:
deg: 293
gust: 1.34
speed: 0.89 */












// Declaring variables to target HTML elements
// let searchBoxEl = document.getElementById('enter-city');
// let searchBtnEl = document.getElementById('search-btn');

// var init = function() {

//     fetch(queryURL)
//     .then(response => response.json())
//     .then(data => console.log(data));

//     document.getElementById('date').innerHTML = "Need Dynamic Date";
//     document.getElementById('temperature').innerHTML = "Temperature";
//     document.getElementById('humidity').innerHTML = "Humidity";
//     document.getElementById('windspeed').innerHTML = "Wind Speed";
//     document.getElementById('uv').innerHTML = "UV-Index";

//     document.getElementById('card1').innerHTML = "Needs Dynamic Forecast";
//     document.getElementById('card2').innerHTML = "Needs Dynamic Forecast";
//     document.getElementById('card3').innerHTML = "Needs Dynamic Forecast";
//     document.getElementById('card4').innerHTML = "Needs Dynamic Forecast";
//     document.getElementById('card5').innerHTML = "Needs Dynamic Forecast";
// };
// searchBtnEl.addEventListener("click", init);


// button.addeventListener("click", function(event){
//      event.preventDefault();
//      let inputValue = document.querySelector("#idofinput").value
//      inputValue will be the value of the users input
//      then you would fetch with that data
//      other logic
// })
