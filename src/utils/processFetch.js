import { fetchData } from "./fetch";

async function processData(weatherData) {
  const dataObj = {
    location: weatherData.address,
    temperature: weatherData.days[0].temp,
    feelslike: weatherData.days[0].feelslike,
    wind: weatherData.days[0].windspeed,
    humidity: weatherData.days[0].humidity,
  };

  return dataObj;
}

export { processData };
