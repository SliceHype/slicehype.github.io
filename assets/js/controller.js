async function fetchData() {
	try {
	  const res = await fetch('https://www.slicehype.tv/assets/json/config.json');
	  const data = await res.json();
	  console.log(data.categories);
	} catch (e) {
	  console.error(e);
	}
  }