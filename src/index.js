import { fetchData } from "./utils/fetch";
import { processData } from "./utils/processFetch";

async function main() {
  try {
    const weatherData = await fetchData("london");
    const data = await processData(weatherData);
    console.log(data.location);
    console.log(data.temperature);
    console.log(data.feelslike);
    console.log(data.wind);
    console.log(data.humidity);
  } catch (error) {
    console.error("Error in main function:", error);
  }
}

main();
