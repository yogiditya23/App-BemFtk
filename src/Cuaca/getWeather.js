getWeather = () => {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=8f3a004af8aa43d2716a0faca1222bea&units=metric';
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({
        forecast: {
          main: responseJson.weather[0].main,
          description: responseJson.weather[0].description,
          temp: responseJson.main.temp
        }
      });
    }
  );
};
