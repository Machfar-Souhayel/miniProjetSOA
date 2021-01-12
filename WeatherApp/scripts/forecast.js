class Forecast {
  // Forecast class constructor
  constructor() {
    this.key = "4Qh3RBIYq6kn6yZpHqkgyxa2K6OGM1lj";
    this.weatherUri =
      "http://dataservice.accuweather.com/currentconditions/v1/";
    this.cityUri =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
  }
  // Update the city
  async updateCity(city) {
    const cityDetails = await this.getCity(city);
    const weather = await this.getWeather(cityDetails.Key);

    return {
      cityDetails,
      weather,
    };
  }
  // Get city information
  async getCity(city) {
    const query = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.cityUri + query);
    const data = await response.json();

    return data[0];
  }
  // Get weather information
  async getWeather(id) {
    const query = `${id}?apikey=${this.key}`;
    const response = await fetch(this.weatherUri + query);
    const data = await response.json();

    return data[0];
  }
}
