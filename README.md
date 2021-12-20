# weather-dashboard
link: https://miguelxosorio.github.io/weather-dashboard/

## Description
This is a simple weather dashboard app, where I could search for a city's current weather and also see it's 5 day forecast.  

## User Story
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly

## Framework
* Javascript
* Bootstrap
* jQuery

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
- add the UV-Index Color - write condition and add color ✅
- add window prompt if user didn't put any city on the input ✅
- add feature where when button is clicked, weather data of that city   re-populates on the html

## Challenges
* I tried making a function targeting the appended buttons, it was registering the clicks when I console logged it but every logic I put inside is getting error
* Clicking the buttons on the search history and current weather reloading - I thought if I nest another fetch (run the same codes in the first and second fetch) and target the buttons, it would repopulate

## Screenshot

![Demo](https://github.com/miguelxosorio/weather-dashboard/blob/main/assets/images/Weather_Dashboard.gif)

## Contributors
Miguel Osorio