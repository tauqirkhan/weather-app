function manageDom(data) {
  const conditions = document.querySelector(".conditions");
  const address = document.querySelector(".address");
  const temperature = document.querySelector(".temperature");
  const feelslike = document.querySelector(".feelslike");
  const wind = document.querySelector(".wind");
  const humidity = document.querySelector(".humidity");

  conditions.textContent = data.conditions;
  address.textContent = data.location;
  temperature.innerHTML = `${data.temperature.toFixed()}<span class="tempDegree">&deg;f</span>`;
  feelslike.innerHTML = `Feels Like: ${data.feelslike.toFixed()}<span class="tempFeel">&deg;f</span>`;
  wind.textContent = `Wind: ${data.wind.toFixed()}km/h`;
  humidity.textContent = `Humidity: ${data.humidity.toFixed()}%`;
}

export { manageDom };
