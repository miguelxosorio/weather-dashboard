# weather-dashboard

## User Story
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly

## Acceptance Criteria
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

## ToDo's
1. Mock up HTML to see layout ✅
2. Insert weather API ✅
3. js 
- Capturing the Textbox value ✅
    - capture value in <input> ✅
    - try to make something submittable ✅
    - place input text into URL to query for the data on the city ✅
- making the data populate on the placeholders ✅
    - use correct API for UV-index ✅
    - use correct API for 5 day forecast ✅
    - make weather images populate on the placeholders ✅
- set up local storage ✅ 
    - after searching, cities should append ✅
- add feature where when button is clicked, weather data of that city   re-populates on the html
- add the UV-Index Color - write condition and add color ✅
- add window prompt if user didn't put any city on the input
- if input already exists in the localstorage, no need to append