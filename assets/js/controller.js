async function fetchData() {
  try {
    const res = await fetch("https://www.slicehype.tv/assets/json/config.json");

    return res;
  } catch (e) {
    console.error(e);
  }
}
