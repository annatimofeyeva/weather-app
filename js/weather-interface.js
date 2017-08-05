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

var getTempIntl = function(location, tempData) {
  $('#'+location).text(convertToCelsius(tempData));
};


var majorCities = ["Tokyo", "Chelyabinsk", "Seattle", "Moscow", "StPetersburg"];

$(document).ready(function() {
  var currentWeatherObject = new Weather();

  majorCities.forEach(function(location){
      $('#citiesTemp').append("<div class='intl-box'> "
      + location +
      "<br>" + "<span id='"
      + location + "'" +
      currentWeatherObject.getCelsiusTemp(location, getTempIntl) + "</span>" +
      "</div>");
    });

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

// gmaps find location functionality
    $('#locateUser').click(locateUser);
    });

    //google maps functions
    function locateUser() {
      // If the browser supports the Geolocation API
      if (navigator.geolocation){
        var positionOptions = {
          enableHighAccuracy: true,
          timeout: 10 * 1000 // 10 seconds
        };
        navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);
      }
      else {
        alert("Your browser doesn't support the Geolocation API");
      }
    }



    // this is the success callback from telling the navigator (your browser) to get the current user's position
    // we do this on line 13 above. We pass in a function to call on success, a function to call on error, and some options to tell the geolocation api how we want it to run.
    // on successfully locating the user, geolocationSuccess() gets called automatically, and it is passed the user's position as an argument.
    // on error, geolocationError is called.


    function geolocationSuccess(position) {
      // here we take the `position` object returned by the geolocation api
      // and turn it into google maps LatLng object by calling the google.maps.LatLng constructor function
      // it 2 arguments: one for latitude, one for longitude.
      // You could refactor this section to pass google maps your own coordinates rather than using geolocation for the user's current location.
      // But you must use coordinates to use this method.
      var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      var myOptions = {
        zoom : 16,
        center : userLatLng,
        mapTypeId : google.maps.MapTypeId.ROADMAP
      };
      // Draw the map - you have to use 'getElementById' here.
      var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
      // Place the marker
      new google.maps.Marker({
        map: mapObject,
        position: userLatLng
      });
    }

    function geolocationError(positionError) {
      alert(positionError);
    }
