var apiKey = "4482eb798ce5a8462165873ffe2e0dff";

//var apiKey = require('./../.env').apiKey;
var Weather = require ('./../js/weather.js').weatherModule;

$(document).ready(function() {
  $('#weather-humidity').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('#showHumidity').text("The humidity in " + city + " is " +
    response.main.humidity + "%");
    });
  });

    $('#kelvin-temp').click(function() {
      var city= $('#location').val();
        //alert(citytemp);
      $('#location').val("");
      $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
        $('#showKelvinTemp').text("Kelvin Temperature in " + city + " is " + response.main.temp + " degrees.");
      });
    });

    $('#fahrenheit-temp').click(function() {
      var city= $('#location').val();
        //alert(citytemp);
      $('#location').val("");
      var simpleWeather = new Weather("summer");
      var fahrenheitTemp = simpleWeather.toFahrenheit(city);
    $('#showFahrenheitTemp').text("Fahrenheit Temperature in " + city +  " is " + fahrenheitTemp  + " degrees.");
    });


    $('#celsius-temp').click(function() {
      var city = $('#location').val();
        //alert(citytemp);
      $('#location').val("");
      var simpleWeather = new Weather("summer");
      var celsiusTemp = simpleWeather.toCelsius(city);
    $('#showCelsiusTemp').text("Celsius Temperature in " + city +  " is " + celsiusTemp + " degrees.");
    });
   });

/*
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
     .then(function(response){
        $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
     })

     .fail(function(error) {
        $('.showWeather').text(error.responseJSON.message);
      });
  });
});
*/
