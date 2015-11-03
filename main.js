$(document).ready(function () {
  page.init();
});
var page = {
  charleston_url: 'http://api.wunderground.com/api/e71430d711afeba0/conditions/q/SC/Charleston.json',
  init: function () {
    page.initStyling();

  },
  initStyling: function () {
    page.getWeather(page.charleston_url);
    page.getWeather('http://api.wunderground.com/api/e71430d711afeba0/conditions/q/MI/Kalamazoo.json');
  },
  getWeather: function(myUrl) {
    $.ajax({
      url: myUrl, //pulls data from the url listed above under var page
      method: 'GET', // returns 1 object: current_observation
      success: function (data){
        console.log(data['current_observation']);
        $('.weather').append('<h1>' + data.current_observation.display_location.full + '</h1>' + '<h3>' + "Temperature: " + data.current_observation.temp_f +'<h3>' + "Feels like: " + data.current_observation.feelslike_f + ' deg' + '</h3>' + '<h3>' + 'Weather: ' + data.current_observation.weather + '</h3>');

      }
    }

    )
  }
};
