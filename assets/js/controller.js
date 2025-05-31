async function fetchData() {
  try {
    const res = await fetch("https://www.slicehype.tv/assets/json/config.json");
    return await res.json();
  } catch (e) {
    console.error(e);
  }
}
