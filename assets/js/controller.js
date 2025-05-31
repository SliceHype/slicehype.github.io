async function fetchData() {
  try {
    const res = await fetch("https://www.slicehype.tv/assets/json/config.json");
    const data = await res.json();

    return data;
  } catch (e) {
    console.error(e);
  }
}
