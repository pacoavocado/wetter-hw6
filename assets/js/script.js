let apiKey = "82177c8d5ce71c99ccc460caecda9690";
var searchFormEl = document.querySelector('#search-form');
var resultTextEl = document.querySelector('#result-text')
var resultContextEl = document.querySelector('#result-content')



function getParams() {
  // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
  var searchParamsArr = document.location.search.split('&');

  // Get the query and format values
  var city = searchParamsArr[0].split('=').pop();
  // var format = searchParamsArr[1].split('=').pop();

  searchApi(city);
}

// function printResults(weatherData) {
//   console.log(weatherData);

//   // set up `<div>` to hold result content
//   var resultCard = document.createElement('div');
//   resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

//   var resultBody = document.createElement('div');
//   resultBody.classList.add('card-body');
//   resultCard.append(resultBody);

//   var titleEl = document.createElement('h3');
//   titleEl.textContent = weatherData.title;

//   var bodyContentEl = document.createElement('p');
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
  let queryUrl = `https://api.openweathermap.org/data/2.5/forecast?q=&appid=${apiKey}`;
  
  if (city) {
    queryUrl = `https://api.openweathermap.org/data/2.5/forecast?q=` + city + `&appid=${apiKey}`;
  
    fetch(queryUrl)
    .then(headers => headers.json())
   
   
    .then(weatherData => {
        console.log(weatherData);
        
        let { name } = name;
        let { icon, descripiton } = data.weather;
        let { temp, humidity } = data.main;
        let { speed } = data.wind;
        console.log(name,icon,descripiton,temp,humidity,speed)
      
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