async function fetchHeader() {
  try {
    const res = await fetch("https://www.slicehype.tv/layout/header.html");
    const data = await res.text();

    return data;
  } catch (e) {
    console.error(e);
  }
}

async function fetchFooter() {
  try {
    const res = await fetch("https://www.slicehype.tv/layout/footer.html");
    const data = await res.text();

    return data;
  } catch (e) {
    console.error(e);
  }
}

async function fetchData() {
  try {
    const res = await fetch("https://www.slicehype.tv/assets/json/config.json");
    const data = await res.json();

    return data;
  } catch (e) {
    console.error(e);
  }
}
