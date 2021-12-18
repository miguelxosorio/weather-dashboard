// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} - Open Weather Org doc

// Assigning the key to a variable
const APIKey = "a0e0cce6bbb236d2d9e640863e8da2f1";
// -------------------- Initial Function --------------------//

// Capturing the value of the <input> after clicking the search button
// declaring the button element as a variable
var searchBtnEl = document.getElementById('search-btn');

// Empty Array
var cities = [];
if (localStorage.getItem("history")) {
    cities = JSON.parse(localStorage.getItem("history"));
}

// += concatenating, adding by itself
function displayCity() {
    document.getElementById('search-history').innerHTML = "";
    for (let i = 0; i < cities.length; i++) {
        document.getElementById('search-history').innerHTML += `<button class="form-control"><span id="city1">${cities[i]}</span></button><br>`
        
    }
}

displayCity();  

// Creating the function for the click
searchBtnEl.addEventListener("click", function(event){
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
        displayCity();
         console.log(data); 

        cities.push(data.name);
        localStorage.setItem("history", JSON.stringify(cities));
        displayCity();  
        // place data as text content in the element, weather data displayed dynamically
        // trying to convert date to standard format
        // var date = new Date(data.dt).toLocaleString("en-US")
        // console.log(date)

        
        var iconURL = `https://api.openweathermap.org/img/w/${data.weather[0].icon}.png`;
        
        // Add weather Icon dynamically to HTML
        document.getElementById('icon').src = iconURL;
        // City Name displayed dynamically
        document.getElementById('city-name').innerHTML = `City of ${data.name}`;
        // document.getElementById('date').innerHTML = `${date}`; // date is wrong, need to fix
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
        

        // this is nested inside the first fetch
        fetch(uvURL_BASE)
        .then(response => response.json())
        .then(data => {
            
        // need UV-Index displayed dynamically
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

      



    // API call for the 5 day forecast
    // var cityForecastURL_BASE = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}&units=imperial`;    
    // fetch(cityForecastURL_BASE)
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
            // const valuesOnly = Object.values(data);

            // console.log(valuesOnly)    

    
        //var day1 = data.list[0].weather[0].description; // change this to the actual date
        // console.log();
        // var day2 = data.list[8].weather[0].description;
        // var day3 = data.list[16].weather[0].description;
        // var day4 = data.list[24].weather[0].description;
        // var day5 = data.list[32].weather[0].description;
        // var days = [day1, day2, day3, day4, day5];

        // for (var i = 0; i < days.length; i++) {

        //     console.log(days.length)


        // }

        // Cards display for 5 day forecast
        // DAY 1 Forecast
        // document.getElementById('day1').innerHTML = `${day1}`;
        // document.getElementById('pic1').innerHTML = `${data.list[0].weather.icon}`;
        // document.getElementById('temp1').innerHTML = `${data.list[0].main.temp}°F`;
        // document.getElementById('wind1').innerHTML = `${data.list[0].wind.speed}mph`;
        // document.getElementById('hum1').innerHTML = `${data.list[0].main.humidity}%`;
        


        // document.getElementById('day2').innerHTML = `${day2}`;
        // document.getElementById('day3').innerHTML = `${day3}`;
        // document.getElementById('day4').innerHTML = `${day4}`;
        // document.getElementById('day5').innerHTML = `${day5}`;

    // })
    
        
        
    
    // need to store it in local storage

    // need to upload in local storage

});



// DATA
{
   /* "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
    {
    "dt": 1639785600, //  1. this date from UNIX needs to be converted and extracted for the card
    "main": {
    "temp": 75.52,  // 3. need to extract this for the card
    "feels_like": 76.53,
    "temp_min": 74.39,
    "temp_max": 75.52,
    "pressure": 1010,
    "sea_level": 1010,
    "grnd_level": 994,
    "humidity": 80, // 5. need to extract this for the card
    "temp_kf": 0.63
    },
    "weather": [
    {
    "id": 802,
    "main": "Clouds",
    "description": "scattered clouds",
    "icon": "03n" // 2. need to extract this for the card
    }
    ],
    "clouds": {
    "all": 40
    },
    "wind": {
    "speed": 8.59, // 4. need to extract this for the card
    "deg": 173,
    "gust": 21
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
    "pod": "n"
    },
    "dt_txt": "2021-12-18 00:00:00"
    },
*/
}