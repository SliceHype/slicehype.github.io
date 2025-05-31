async function fetchVideoData() {
  try {
    const response = await fetch("../json/config.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching video data:", error);
    return null;
  }
}

console.log(fetchVideoData());
