let apiKey = "82177c8d5ce71c99ccc460caecda9690";

let queryUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Dallas&appid=${apiKey}`

fetch(queryUrl)
.then(headers => headers.json())
.then(weatherData => {
    console.log(weatherData);
})