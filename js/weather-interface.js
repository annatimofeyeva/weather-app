var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(city, humidityData) {
  $('#showHumidity').text("The humidity in " + city + " is " + humidityData + "%");
};

var displayKelvinTemp = function(city, tempData) {
  $('#showKelvinTemp').text("Kelvin Temperature in  " + city + " is " + tempData + "  degrees.");
};

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

});
