let apiKey = "82177c8d5ce71c99ccc460caecda9690";

let queryUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Dallas&appid=${apiKey}`

fetch(queryUrl)
.then(headers => headers.json())
.then(weatherData => {
    console.log(weatherData);
})

var searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector('#search-input').value;
  var formatInputVal = document.querySelector('#format-input').value;

  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }

  var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

  location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);









function handleSearchFormSubmit(event) {
    event.preventDefault();
  
    var searchInputVal = document.querySelector('#search-input').value;
    var formatInputVal = document.querySelector('#format-input').value;
  
    if (!searchInputVal) {
      console.error('You need a search input value!');
      return;
    }
  
    searchApi(searchInputVal, formatInputVal);
  }
  