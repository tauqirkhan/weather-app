import { fetchData } from "./utils/fetch";
import { processData } from "./utils/processFetch";

function main() {
  const searchInput = document.querySelector("#searchLoc");
  const searchBtn = document.querySelector("#searchBtn");

  searchBtn.addEventListener("click", showdata);
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      showdata();
    }
  });

  async function showdata(e) {
    const locationName = searchInput.value;

    if (locationName) {
      try {
        const weatherData = await fetchData(locationName);
        const data = await processData(weatherData);
        console.log(data.location);
        console.log(data.temperature);
        console.log(data.feelslike);
        console.log(data.wind);
        console.log(data.humidity);
      } catch (error) {
        console.error("Error in main function:", error);
      }
    } else {
      console.log("Please enter a location");
    }
    searchInput.value = "";
  }
}

main();
