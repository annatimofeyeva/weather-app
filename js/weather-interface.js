var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(city, humidityData) {
  $('#showHumidity').text("Humidity in " + city + " is " + humidityData + "%.");
};

var displayKelvinTemp = function(city, tempData) {
  $('#showKelvinTemp').text("Kelvin Temperature in  " + city + " is " + tempData + "  degrees.");
};

var displayFarenheitTemp = function(city, tempData) {
  $('#showFahrenheitTemp').text("Fahrenheit Temperature in  " + city + " is " + convertToFahrenheit(tempData) + "  degrees.");
};

var displayCelsiusTemp = function(city, tempData) {
  $('#showCelsiusTemp').text("Celsius Temperature in  " + city + " is " + convertToCelsius(tempData) + "  degrees.");
};


var convertToFahrenheit = function(kelvins) {
  var fahrenheit = 9/5*(kelvins - 273) + 32;
  return Math.floor(fahrenheit);
};

var convertToCelsius = function(kelvins) {
  var celsius = kelvins - 273;
  return Math.floor(celsius);
}


$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weather-humidity').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getHumidity(city, displayHumidity);
  });

  $('#kelvin-temp').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getTemp(city, displayKelvinTemp);
  });

  $('#fahrenheit-temp').click(function() {
    var city = $('#location').val();
    $('#location').val("");
      currentWeatherObject.getFahrenheitTemp(city, displayFarenheitTemp);

    });

  $('#celsius-temp').click(function() {
    var city = $('#location').val();
    $('#location').val("");
      currentWeatherObject.getCelsiusTemp(city, displayCelsiusTemp);

    });

});
