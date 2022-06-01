//API key
//https://api.nasa.gov/planetary/apod?api_key=jgGpw1ytsSROTdgYpdxxft56s9DDK0GI5PQflFUy

function fetchData() {
  try {
    fetch(baseUrl + apiKey)
      .then(response => response.json())
      .then(json => {
        console.log(json)
      })
  } catch (error) {
    console.log(error)
  }
}
fetchData()

const title = document.querySelector("#title");
const copyright = document.querySelector("#copyright");
const mediaSection = document.querySelector("#media-section");
const information = document.querySelector("#description");