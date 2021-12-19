// Assigning the key to a variable
const APIKey = "a0e0cce6bbb236d2d9e640863e8da2f1";
// -------------------- Initial Function --------------------//

// Capturing the value of the <input> after clicking the search button - ok
// declaring the button element as a variable
var searchBtn = document.getElementById('search-btn');

// Empty Array first then set up local storage - storing the search history
var cities = [];
if (localStorage.getItem("history")) {
    cities = JSON.parse(localStorage.getItem("history"));
} // If there's value in the cities[] = true, then we can parse it from there and retrieve the values

// Function to display search history appending as buttons, += concatenating, adding on itself. 
function appendCity() {
    document.getElementById('search-history').innerHTML = "";
    for (let i = 0; i < cities.length; i++) {
        document.getElementById('search-history').innerHTML += `<button class="form-control history-button" data-id=${cities[i]}><span>${cities[i]}</span></button></br>`;
        // making the cities their own data ID's so we can access it
        
    }
}
appendCity();

// Creating the function for the click
searchBtn.addEventListener("click", function(event){
    event.preventDefault();
    
    // Creating a variable for the date
    const today = moment().format('LL'); // formating how the date should look like 
    console.log(today); // console logging how the date appears
   
    // creating a variable for the <input> and putting value in the entry
    let city = document.getElementById('enter-city').value;
    console.log(city);
    
    // setting up the value of the variable as a string template literal to capture the city text in <input> and fetch the data
    var cityWeatherURL_BASE = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`;
    
    fetch(cityWeatherURL_BASE)
     .then(response => response.json())
     .then(data => {
        appendCity();
        //  console.log(data); 

        cities.push(data.name);
        localStorage.setItem("history", JSON.stringify(cities));
        appendCity();  
        console.log(data.name)
        // place data as text content in the element, weather data displayed dynamically
    
        var iconURL = `https://api.openweathermap.org/img/w/${data.weather[0].icon}.png`;
        
        // Add weather Icon dynamically to HTML
        document.getElementById('icon').src = iconURL;
        // City Name displayed dynamically
        document.getElementById('city-name').innerHTML = `${data.name}`;
        // Temperature displayed dynamically 
        document.getElementById('temperature').innerHTML = `Temp: ${data.main.temp}°F`;
        // Humidity displayed dynamically
        document.getElementById('humidity').innerHTML = `Humidity: ${data.main.humidity}%`;
        // Windspeed displayed dynamically
        document.getElementById('windspeed').innerHTML = `Wind-Speed: ${data.wind.speed}mph`;
        
        var lon = data.coord.lon;
        var lat = data.coord.lat;
        // setting up the API Call for the UV INDEX
        var uvURL_BASE = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${APIKey}&units=imperial&${city}`;
        

        // this is nested inside the first fetch async
        fetch(uvURL_BASE)
        .then(response => response.json())
        .then(data => {
            
        // UV-Index displayed dynamically
        document.getElementById('uv').innerHTML = `UV-Index ${data.current.uvi}`;    
        console.log(data);     
        
        document.getElementById('five-day-forecast').innerHTML = 
            `<div class="col-md-2 forecast bg-primary text-white m-2 rounded">
                <span id="day1">${moment(data.daily[1].dt, "X").format("MM/DD/YYYY")}</span>
                <img src="https://api.openweathermap.org/img/w/${data.daily[1].weather[0].icon}.png" alt="Weather Icon"/>
                <p>Temp: <span id="temp1">${data.daily[1].temp.day}°F</span></p>
                <p>Wind: <span id="wind1">${data.daily[1].wind_speed} mph</span></p>
                <p>Humidity: <span id="hum1">${data.daily[1].humidity} %</span></p>
            </div>
        
            <div class="col-md-2 forecast bg-primary text-white m-2 rounded">
                <span id="day2">${moment(data.daily[2].dt, "X").format("MM/DD/YYYY")}</span>
                <img src="https://api.openweathermap.org/img/w/${data.daily[2].weather[0].icon}.png" alt="Weather Icon"/>
                <p>Temp: <span id="temp2">${data.daily[2].temp.day}°F</span></p>
                <p>Wind: <span id="wind2">${data.daily[2].wind_speed} mph</p>
                <p>Humidity: <span id="hum2">${data.daily[2].humidity} %</p>
            </div>

            <div class="col-md-2 forecast bg-primary text-white m-2 rounded">
                <span id="day3">${moment(data.daily[3].dt, "X").format("MM/DD/YYYY")}</span>
                <img src="https://api.openweathermap.org/img/w/${data.daily[3].weather[0].icon}.png" alt="Weather Icon"/>
                <p>Temp: <span id="temp3">${data.daily[3].temp.day}°F</p>
                <p>Wind: <span id="wind3">${data.daily[3].wind_speed} mph</p>
                <p>Humidity: <span id="hum3">${data.daily[3].humidity} %</p>        
            </div>
        
            <div class="col-md-2 forecast bg-primary text-white m-2 rounded">
            <span id="day4">${moment(data.daily[4].dt, "X").format("MM/DD/YYYY")}</span>
                <img src="https://api.openweathermap.org/img/w/${data.daily[4].weather[0].icon}.png" alt="Weather Icon"/>
                <p>Temp: <span id="temp3">${data.daily[4].temp.day}°F</p>
                <p>Wind: <span id="wind3">${data.daily[4].wind_speed} mph</p>
                <p>Humidity: <span id="hum3">${data.daily[4].humidity} %</p>        
            </div>
        
            <div class="col-md-2 forecast bg-primary text-white m-2 rounded">
            <span id="day5">${moment(data.daily[5].dt, "X").format("MM/DD/YYYY")}</span>
                <img src="https://api.openweathermap.org/img/w/${data.daily[5].weather[0].icon}.png" alt="Weather Icon"/>
                <p>Temp: <span id="temp3">${data.daily[5].temp.day}°F</p>
                <p>Wind: <span id="wind3">${data.daily[5].wind_speed} mph</p>
                <p>Humidity: <span id="hum3">${data.daily[5].humidity} %</p>        
            </div>`;            
        })    
       
    })  

});

var historyBtn = document.querySelector(".history-button");

historyBtn.addEventListener("click", function() {
    var dataID = historyBtn.getAttribute('data-id');
    
    console.log(dataID);
   
})