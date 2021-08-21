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
      let queryUrl = `https://api.openweathermap.org/data/2.5/forecast?q=&cnt=32&units=imperial&appid=${apiKey}`;
      
      if (city) {
        queryUrl = `https://api.openweathermap.org/data/2.5/forecast?q=` + city + `&cnt=32&units=imperial&appid=${apiKey}`;
        
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
          
          var temperature1 = weatherData.list[0].main.temp;
          var topWind1 = weatherData.list[0].wind.speed;
          var humid1 = weatherData.list[0].main.humidity;
         
          var temperature2 = weatherData.list[7].main.temp;
          var topWind2 = weatherData.list[7].wind.speed;
          var humid2 = weatherData.list[7].main.humidity;
         
          var temperature3 = weatherData.list[15].main.temp;
          var topWind3 = weatherData.list[15].wind.speed;
          var humid3 = weatherData.list[15].main.humidity;
         
          var temperature4 = weatherData.list[23].main.temp;
          var topWind4 = weatherData.list[23].wind.speed;
          var humid4 = weatherData.list[23].main.humidity;
         
          var temperature5 = weatherData.list[31].main.temp;
          var topWind5 = weatherData.list[31].wind.speed;
          var humid5 = weatherData.list[31].main.humidity;
         


          var currentCity = document.querySelector('.location');
          var addCity = document.createTextNode(nameValue);
          currentCity.appendChild(addCity);
          
        let cardTemp1 = document.querySelector('.card-temp1');
        let addTemp1 = document.createTextNode(temperature1);
        cardTemp1.appendChild(addTemp1);          
          
        let cardTemp2 = document.querySelector('.card-temp2');
        let addTemp2 = document.createTextNode(temperature2);
        cardTemp2.appendChild(addTemp2);          
          
        let cardTemp3 = document.querySelector('.card-temp3');
        let addTemp3 = document.createTextNode(temperature3);
        cardTemp3.appendChild(addTemp3);          
          
        let cardTemp4 = document.querySelector('.card-temp4');
        let addTemp4 = document.createTextNode(temperature4);
        cardTemp4.appendChild(addTemp4);          
          
        let cardTemp5 = document.querySelector('.card-temp5');
        let addTemp5 = document.createTextNode(temperature5);
        cardTemp5.appendChild(addTemp5);          
          
        let cardWind1 = document.querySelector('.card-wind1');
        let addWind1 = document.createTextNode(topWind1);
        cardWind1.appendChild(addWind1);          
          
        let cardWind2 = document.querySelector('.card-wind2');
        let addWind2 = document.createTextNode(topWind2);
        cardWind2.appendChild(addWind2);          
          
        let cardWind3 = document.querySelector('.card-wind3');
        let addWind3 = document.createTextNode(topWind3);
        cardWind3.appendChild(addWind3);          
          
        let cardWind4 = document.querySelector('.card-wind4');
        let addWind4 = document.createTextNode(topWind4);
        cardWind4.appendChild(addWind4);          
          
        let cardWind5 = document.querySelector('.card-wind5');
        let addWind5 = document.createTextNode(topWind5);
        cardWind5.appendChild(addWind5);          
          
        let cardHumid1 = document.querySelector('.card-humidity1');
        let addHumid1 = document.createTextNode(humid1);
        cardHumid1.appendChild(addHumid1);          
          
        let cardHumid2 = document.querySelector('.card-humidity2');
        let addHumid2 = document.createTextNode(humid2);
        cardHumid2.appendChild(addHumid2);          
          
        let cardHumid3 = document.querySelector('.card-humidity3');
        let addHumid3 = document.createTextNode(humid3);
        cardHumid3.appendChild(addHumid3);          
          
        let cardHumid4 = document.querySelector('.card-humidity4');
        let addHumid4 = document.createTextNode(humid4);
        cardHumid4.appendChild(addHumid4);          
          
        let cardHumid5 = document.querySelector('.card-humidity5');
        let addHumid5 = document.createTextNode(humid5);
        cardHumid5.appendChild(addHumid5);          
          
        
          
              
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