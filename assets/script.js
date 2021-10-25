// var cityName = ;
var {lat} = location;
var {lon} = location;
var nameCity = document.getElementById('cityname');
var currentDate = document.createTextNode(moment().subtract(10, 'days').calendar());
var buttons = document.getElementById('recents');
var searches = JSON.parse(localStorage.getItem('searched')) || [];

// when the search button is pressed, it returns a function
document.getElementById('search-button').onclick = function()
{
    var searched = document.getElementById('search-field').value;
    localStorage.setItem("searches", JSON.stringify(searched));
    console.log(searched);
    getCoords();
}

var cityName = JSON.parse();
//adds date to the end of "City: "
nameCity.appendChild(currentDate);

//gets the content that was searched
// function getSearched(){

//     console.log(searched)
// }

// getSearched();

//gets the coordinates for the city entered
var apiBaseUrl = 'https://api.openweathermap.org/'
var searchBtn = $('#searchBtn')
console.log(searchBtn);
function getCoords(){
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b078f64a50989fdeb7bf58c9372972ad`
    fetch(requestUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        lat = data.coord.lat;
        lon = data.coord.lon;
        console.log(lon)
        console.log(lat)
        getWeather();
    });
    buttons.innerText = searches;
    
}
//gets the weather for the coordinates determined
function getWeather(){
    var requestUrl = `${apiBaseUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=b078f64a50989fdeb7bf58c9372972ad`
    fetch(requestUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
    });
}

searchBtn.on('click',function(event){
    event.preventDefault()
    console.log('yes')
})

    

// to display search results set up a function that will auto fill the recently searched buttons with the local storage data




