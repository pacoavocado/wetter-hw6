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

function printResults(resultObj) {
  console.log(resultObj);

  // set up `<div>` to hold result content
  var resultCard = document.createElement('div');
  resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

  var resultBody = document.createElement('div');
  resultBody.classList.add('card-body');
  resultCard.append(resultBody);

  var titleEl = document.createElement('h3');
  titleEl.textContent = resultObj.title;

  var bodyContentEl = document.createElement('p');
  bodyContentEl.innerHTML =
    '<strong>Date:</strong> ' + resultObj.date + '<br/>';

  if (resultObj.subject) {
    bodyContentEl.innerHTML +=
      '<strong>Subjects:</strong> ' + resultObj.subject.join(', ') + '<br/>';
  } else {
    bodyContentEl.innerHTML +=
      '<strong>Subjects:</strong> No subject for this entry.';
  }

  if (resultObj.description) {
    bodyContentEl.innerHTML +=
      '<strong>Description:</strong> ' + resultObj.description[0];
  } else {
    bodyContentEl.innerHTML +=
      '<strong>Description:</strong>  No description for this entry.';
  }

  var linkButtonEl = document.createElement('a');
  linkButtonEl.textContent = 'Read More';
  linkButtonEl.setAttribute('href', resultObj.url);
  linkButtonEl.classList.add('btn', 'btn-dark');
  
  resultBody.append(titleEl, bodyContentEl, linkButtonEl);
  
  resultContentEl.append(resultCard);
}

function searchApi(Location) {
  // var locQueryUrl = 'https://www.loc.gov/search/?fo=json';
  let queryUrl = `https://api.openweathermap.org/data/2.5/forecast?q=&appid=${apiKey}`;
  
  if (location) {
    queryUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Dallas&appid=${apiKey}`;
  
    fetch(queryUrl)
    .then(headers => headers.json())
    .then(weatherData => {
        console.log(weatherData);
        return weatherData.json();
    })
  }

 
}




















// function handleSearchFormSubmit(event) {
  //   event.preventDefault();
  
  //   var searchInputVal = document.querySelector('#search-input').value;
  //   var formatInputVal = document.querySelector('#format-input').value;
  
  //   if (!searchInputVal) {
    //     console.error('You need a search input value!');
    //     return;
    //   }
    
    //   var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;
    
    //   location.assign(queryString);
    // }
    
    // searchFormEl.addEventListener('submit', handleSearchFormSubmit);
    
    
    
    
    
    
    


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