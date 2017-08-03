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
  }

exports.weatherModule = Weather;


/*function Weather(localWeather){
  this.localWeather = localWeather;
}

Weather.prototype.toFahrenheit = function(city){
  var kelvinTempInput = response.main.temp;
  var fahrenheitTemp = (kelvinTempInput * 1.8) - 459.67;
  return fahrenheitTemp;
  };

Weather.prototype.toCelsius = function(city){
  var kelvinTempInput = response.main.temp;
  var celsiusTemp =  kelvinTempInput - 273.15;
  return celsiusTemp;
};

exports.weatherModule = Weather;
*/
