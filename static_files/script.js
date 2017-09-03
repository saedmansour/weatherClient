document.addEventListener("DOMContentLoaded", function(){
  function getWeatherFromApi(query) {
    axios.get('http://localhost:3000/v1/weather/city', {
      params: { city: query},
     }).then(function (response) {
      htmlResult = response.data.description
                 + ", temparature: " + response.data.temparature
                 + ", wind wpeed: " + response.data.wind_speed;

      //document.getElementById('weather').innerHTML = JSON.stringify(response.data);
      document.getElementById('weather').innerHTML = htmlResult;
    })
    .catch(function (error) {
      document.getElementById('weather').innerHTML = "Sorry! City not found :( Please, try again.";
      console.log(error);
    });
  }

  function processForm(e) {
    if (e.preventDefault) e.preventDefault();
    cityName = document.getElementById('city-name').value;
    getWeatherFromApi(cityName);
    return false;
  }

  var form = document.getElementById('weather-form');
  if (form.attachEvent) {
    form.attachEvent("submit", processForm);
  } else {
    form.addEventListener("submit", processForm);
  }

});
