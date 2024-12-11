let input = document.getElementById("input");
let tittle = document.getElementById("title");
let plot = document.getElementById("plot");
let year = document.getElementById("year");
let img = document.getElementById("img")

// 768becfb
// http://www.omdbapi.com/?apikey=768becfb&t=avatar

function getData(event){
    event.preventDefault();

    const apikey = "768becfb";
    const movie = input.value;
     
    const url = `http://www.omdbapi.com/?apikey=${apikey}&t=${movie}`;

    fetch (url)

    .then((response) => response.json())
    .then((data) => {
    console.log(data);

    // input.innerHTML = data.input;
    title.innerText = data.Title;
    plot.innerText = data.Plot;
    year.innerText = data.Year;
    img.src = data.Poster;
    })
.catch((error) => console.log(error));
}