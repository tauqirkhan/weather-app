async function processData(weatherData) {
  const dataObj = {
    conditions: weatherData.days[0].conditions,
    location: weatherData.resolvedAddress,
    temperature: weatherData.days[0].temp,
    feelslike: weatherData.days[0].feelslike,
    wind: weatherData.days[0].windspeed,
    humidity: weatherData.days[0].humidity,
  };

  return dataObj;
}

export { processData };
