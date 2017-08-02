var apiKey = require('./../.env').apiKey;
//var Weather = require ('./../js/weather.js').weatherModule;

$(document).ready(function() {
  $('#weather-humidity').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('#showHumidity').text("The humidity in " + city + " is " + response.main.humidity + "%");
    //alert(city);
  });
    $('#kelvin-temp').click(function() {
      var citytemp= $('#location').val();
        //alert(citytemp);
      $('#location').val("");
      $('#showKelvinTemp').text("Kelvin Temperature in " + city + " is " + response.main.temp + " degrees.");
    });

    $('#fahrenheit-temp').click(function() {
      var citytemp= $('#location').val();
        //alert(citytemp);
      $('#location').val("");
      var simpleWeather = new Weather("summer");
      var fahrenheitTemp = simpleWeather.toFahrenheit(weatherLocation);
    $('#showFahrenheitTemp').text("Fahrenheit Temperature in " + city +  " is " + fahrenheitTemp  + " degrees.");
    });


    $('#celsius-temp').click(function() {
      var citytemp= $('#location').val();
        //alert(citytemp);
      $('#location').val("");
      var simpleWeather = new Weather("summer");
      var celsiusTemp = simpleWeather.toCelsius(weatherLocation);
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
