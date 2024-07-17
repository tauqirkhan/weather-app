async function fetchData(locationValue = "mumbai") {
  const key = "37H7MA39XFZDZ3H3VNZVBVQAC";
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationValue}?key=${key}`,
      { mode: "cors" }
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

export { fetchData };
