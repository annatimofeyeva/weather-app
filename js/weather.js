function Weather(localWeather){
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
