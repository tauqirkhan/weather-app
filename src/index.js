import "./style.css";
import { fetchData } from "./utils/fetch";
import { processData } from "./utils/processFetch";
import { manageDom } from "./utils/manageDom";

function main() {
  const searchInput = document.querySelector("#searchLoc");
  const searchBtn = document.querySelector("#searchBtn");
  const loading = document.querySelector("#loading");

  searchBtn.addEventListener("click", showdata);
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      showdata();
    }
  });

  async function showdata(e) {
    const locationName = searchInput.value;

    if (locationName) {
      loading.style.display = "block";

      try {
        const weatherData = await fetchData(locationName);
        const data = await processData(weatherData);
        manageDom(data);
      } catch (error) {
        console.error("Error in main function:", error);
      } finally {
        loading.style.display = "none";
      }
    } else {
      console.log("Please enter a location");
    }
    searchInput.value = "";
  }
}

main();
