const links = [
  "https://restcountries.com/v3.1/all?fields=name,population,region",
  "https:catfact.ninja/facts?limit=10",
];

async function infoFromLink(urls) {
  Promise.all(urls.map((url) => fetch(url)))
    .then((res) => {
      return Promise.all(res.map((response) => response.json()));
    })
    .then((values) => {
      console.log(values[0], values[1].data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  Promise.all(urls.map((url) => fetch(url)))
    .then((res) => {
      return Promise.all(res.map((response) => response.json()));
    })
    .then((values) => {
      console.log(
        values[0].filter((country) => country.region === "Europe"),
        values[1].data.filter((el) => el.length > 50)
      );
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
infoFromLink(links);
