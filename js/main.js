//API key
//https://api.nasa.gov/planetary/apod?api_key=jgGpw1ytsSROTdgYpdxxft56s9DDK0GI5PQflFUy

const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
const apiKey = "gtAoVhMXRWgNSJBwefTrxOhwmzb8QjUHY0pEehFE";

function fetchData() {
  try {
    fetch(baseUrl + apiKey)
      .then(response => response.json())
      .then(json => {
        console.log(json)
      })
      console.log(error)
    displaydata(json)
  }catch(error){
    console.log(error)
  }
}

fetchData()

const title = document.querySelector("#title");
const copyright = document.querySelector("#copyright");
const mediaSection = document.querySelector("#media-section");
const information = document.querySelector("#description");

function displaydata(data){
  title.innerHTML=data.title;
}

if(data.hasOwnProperty("copyright")){
  copyright.innerHTML=data.copyright;
  } else{
  copyright.innerHTML=""
  } 

if(data.media_type=="video"){
  mediaSection.innerHTML=videoSection;
  document.getElementById("videoLink").src=data.url;

  }else{
  mediaSection.innerHTML=imageSection;
  document.getElementById("hdimg").href=data.hdurl;
  document.getElementById("image_of_the_day").src=data.url;
  }

  const imageSection =`<a id="hdimg" href="" target="-blank">
  <div class="image-div">
  <img id="image_of_the_day" src="" alt="image-by-nasa">
  </div>
  </a>`

const videoSection=`<div class="video-div"> <iframe id="videoLink" src="" frameborder="0"></iframe></div>`
