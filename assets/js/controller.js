async function fetchData() {
  try {
    return await fetch("https://www.slicehype.tv/assets/json/config.json");
  } catch (e) {
    console.error(e);
  }
}
