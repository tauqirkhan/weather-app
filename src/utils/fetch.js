async function fetchData(locationName = "mumbai") {
  const key = "37H7MA39XFZDZ3H3VNZVBVQAC";
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationName}?key=${key}`
    );
    if (!response.ok) {
      const errorSpan = document.querySelector("#error");
      errorSpan.textContent = "Enter correct value";
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

export { fetchData };
