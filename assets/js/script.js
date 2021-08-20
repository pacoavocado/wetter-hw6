let apiKey = "82177c8d5ce71c99ccc460caecda9690";
var searchFormEl = document.querySelector('#search-form');
var resultTextEl = document.querySelector('#result-text')
var resultContextEl = document.querySelector('#result-content')

let todayTwo = moment().format('MM/DD/YY');
let today = moment().format('MMMM Do, YYYY');
let toDay = document.querySelector('.date');
let addDay = document.createTextNode(today);
toDay.appendChild(addDay)
console.log(today)

let tomorrow = moment(today, "MM/DD/YY").add("DD", 1);


console.log(todayTwo);






function getParams() {

  var searchParamsArr = document.location.search.split('&');

  var city = searchParamsArr[0].split('=').pop();

  searchApi(city);
}

function printResults(weatherData) {
  console.log(weatherData);

  // var resultCard = document.createElement('div');
  // resultCard.classList.add('card');

  
  // var titleEl = document.createElement('h2');
  // titleEl.textContent = nameValue;
  
  // var bodyContentEl = document.createElement('h4');
  // bodyContentEl.innerHTML =
  //   '<strong>Date:</strong> ' + weatherData.date + '<br/>';
  
  // if (weatherData.subject) {
    //   bodyContentEl.innerHTML +=
    //     '<strong>Subjects:</strong> ' + weatherData.subject.join(', ') + '<br/>';
    // } else {
      //   bodyContentEl.innerHTML +=
      //     '<strong>Subjects:</strong> No subject for this entry.';
      // }
      
      // if (weatherData.description) {
        //   bodyContentEl.innerHTML +=
        //     '<strong>Description:</strong> ' + weatherData.description[0];
        // } else {
          //   bodyContentEl.innerHTML +=
          //     '<strong>Description:</strong>  No description for this entry.';
          // }
          
          // var linkButtonEl = document.createElement('a');
          // linkButtonEl.textContent = 'Read More';
          // linkButtonEl.setAttribute('href', weatherData.url);
          // linkButtonEl.classList.add('btn', 'btn-dark');
          
          // resultBody.append(titleEl, bodyContentEl, linkButtonEl);
          
          // resultContentEl.append(resultCard);
        }
        
        

        
        


    function searchApi(city) {
      // var locQueryUrl = 'https://www.loc.gov/search/?fo=json';
      let queryUrl = `https://api.openweathermap.org/data/2.5/forecast?q=&cnt=31&units=imperial&appid=${apiKey}`;
      
      if (city) {
        queryUrl = `https://api.openweathermap.org/data/2.5/forecast?q=` + city + `&cnt=31&units=imperial&appid=${apiKey}`;
        
        fetch(queryUrl)
        .then(headers => headers.json())
        
        
        .then(weatherData => {
          console.log(weatherData);
          let lat = weatherData.city.coord.lat
          let lon = weatherData.city.coord.lon

          let queryUrl1 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&units=imperial&appid=${apiKey}`
          
          fetch(queryUrl1)
          .then(headers1 => headers1.json())

          .then(oneData => {
            console.log(oneData)
            var llTemp = oneData.current.temp
            var lltemp = document.querySelector('.current-temp');
            var addTemp = document.createTextNode(llTemp);
            lltemp.appendChild(addTemp);

            var llWind = oneData.current.wind_speed
            var llwind = document.querySelector('.current-wind');
            var addWind = document.createTextNode(llWind);
            llwind.appendChild(addWind);

            var llHumidity = oneData.current.humidity
            var llhumidity = document.querySelector('.current-humidity');
            var addHumidity = document.createTextNode(llHumidity);
            llhumidity.appendChild(addHumidity);
            
            var llUvi = oneData.current.uvi
            var llUvIndex = document.querySelector('.uv-inded');
            var addUvi = document.createTextNode(llUvi);
            // if (addUvi === 0) {
            // llUvIndex.appendChild(`null`);
            // }
            // else {
            llUvIndex.appendChild(addUvi);
            // }
          })



          var nameValue = weatherData.city.name;
          
          var temperature = weatherData.list[0].main.temp;
          var topWind = weatherData.list[0].wind.speed;
          var humid = weatherData.list[0].main.humidity;
          


          var currentCity = document.querySelector('.location');
          var addCity = document.createTextNode(nameValue);
          currentCity.appendChild(addCity);
          
          
          
          
          
          
              
      console.log(nameValue)
      console.log(temperature)
      console.log(topWind)
      console.log(humid)
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