let apiKey = "82177c8d5ce71c99ccc460caecda9690";
var searchFormEl = document.querySelector('#search-form');
var resultTextEl = document.querySelector('#result-text')
var resultContextEl = document.querySelector('#result-content')
let units = "units=imperial"


function getParams() {

  var searchParamsArr = document.location.search.split('&');

  var city = searchParamsArr[0].split('=').pop();

  searchApi(city);
}

// function printResults(weatherData) {
//   console.log(weatherData);

//   var resultCard = document.createElement('div');
//   resultCard.classList.add('card');

//   var resultBody = document.createElement('div');
//   resultBody.classList.add('daily-card');
//   resultCard.append(resultBody);

//   var titleEl = document.createElement('h2');
//   titleEl.textContent = weatherData.title;

//   var bodyContentEl = document.createElement('h4');
//   bodyContentEl.innerHTML =
//     '<strong>Date:</strong> ' + weatherData.date + '<br/>';

//   if (weatherData.subject) {
//     bodyContentEl.innerHTML +=
//       '<strong>Subjects:</strong> ' + weatherData.subject.join(', ') + '<br/>';
//   } else {
//     bodyContentEl.innerHTML +=
//       '<strong>Subjects:</strong> No subject for this entry.';
//   }

//   if (weatherData.description) {
//     bodyContentEl.innerHTML +=
//       '<strong>Description:</strong> ' + weatherData.description[0];
//   } else {
//     bodyContentEl.innerHTML +=
//       '<strong>Description:</strong>  No description for this entry.';
//   }

//   var linkButtonEl = document.createElement('a');
//   linkButtonEl.textContent = 'Read More';
//   linkButtonEl.setAttribute('href', weatherData.url);
//   linkButtonEl.classList.add('btn', 'btn-dark');
  
//   resultBody.append(titleEl, bodyContentEl, linkButtonEl);
  
//   resultContentEl.append(resultCard);
// }

function searchApi(city) {
  // var locQueryUrl = 'https://www.loc.gov/search/?fo=json';
  let queryUrl = `https://api.openweathermap.org/data/2.5/forecast?q=&cnt=31&units=imperial&appid=${apiKey}`;
  
  if (city) {
    queryUrl = `https://api.openweathermap.org/data/2.5/forecast?q=` + city + `&cnt=31&units=imperial&appid=${apiKey}`;
  
    fetch(queryUrl)
    .then(headers => headers.json())
   
   
    .then(weatherData => {
      console.log(weatherData);
      
        const  name = location.name;
        // const  icon = forecast.symbol;
        // const  descripiton  = ;
        const  temp = forecast.temperature.imperial;
        const  humidity  = forcast.humidity.value;
        const  speed  = forcast.windspeed.unit;
        console.log(name,temp,humidity,speed)
      // printResults(weatherData)
    })
  }
// printResults: function(weatherData) {
// } 
 
}
    


function handleSearchFormSubmit(event) {
    event.preventDefault();
  
    var searchInputVal = document.querySelector('#search-input').value;
   
  
    if (!searchInputVal) {
      console.error('You need a search input value!');
      return;
    }
  
    searchApi(searchInputVal);
  }
  
  searchFormEl.addEventListener('submit', handleSearchFormSubmit);

  getParams();