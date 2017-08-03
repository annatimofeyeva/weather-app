var apiKey = require('./../.env').apiKey;

Weather = function(){
};

Weather.prototype.getHumidity = function(city, displayHumidity) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayHumidity(city, response.main.humidity);
  }).fail(function(error) {
    $('#showHumidity').text(error.responseJSON.message);
  });
};

Weather.prototype.getTemp = function(city, displayKelvinTemp) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayKelvinTemp(city, response.main.temp);
  }).fail(function(error) {
    $('#showKelvinTemp').text(error.responseJSON.message);
  });
};

Weather.prototype.getFahrenheitTemp = function(city, displayFahrenheitTemp) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayFahrenheitTemp(city, response.main.temp);
  }).fail(function(error) {
    $('#showFahrenheitTemp').text(error.responseJSON.message);
  });
};


Weather.prototype.getCelsiusTemp = function(city, displayCelsiusTemp) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayCelsiusTemp(city, response.main.temp);
  }).fail(function(error) {
    $('#showCelsiusTemp').text(error.responseJSON.message);
  });
};


exports.weatherModule = Weather;
