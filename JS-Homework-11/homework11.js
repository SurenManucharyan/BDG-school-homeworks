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
      console.log(
        values[0]
          .filter((country) => country.region === "Europe")
          .map((country) => ({
            name: country.name.common,
            population: country.population,
            region: country.region,
          }))
          .sort((a, b) => b.population - a.population),
        values[1].data.filter((el) => el.length > 50)
      );
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
infoFromLink(links);
