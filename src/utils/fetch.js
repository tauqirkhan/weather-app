async function fetchData(locationName = "mumbai") {
  const key = "37H7MA39XFZDZ3H3VNZVBVQAC";
  const errorSpan = document.querySelector("#errorSearch");
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationName}?key=${key}`
    );
    if (!response.ok) {
      errorSpan.style.display = "block";
      throw new Error(`Response status: ${response.status}`);
    } else {
      errorSpan.style.display = "none";
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

export { fetchData };
