 $(document).ready(function() {

        let cities = ["Berlin", "Paris","Edinburgh","Madrid","Birmingham","London"];
        for (let i = 0; i < cities.length; i++) {
        
            let cityBtn = $("<button>");
            cityBtn.addClass("city-button city-button-color");
            cityBtn.text(cities[i]);
            $("#history").append(cityBtn);
        }
        


let choseUnit = "&units=metric";
let timeEl = moment().format("DD/MM/YYYY")

$("button").click(function(event){

    let cityEl = event.target.textContent;
    console.log("cityEl  =" + cityEl)
    

    let dataCityEl = $(event.target);
    localStorage.setItem("City" , cityEl);
    document.querySelector(".card-title").textContent = (localStorage.getItem("City")) + "   ( " + timeEl + " )";


    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityEl}&limit=5&appid=566a2801aa6d2ed7467b0b0d21c0d5c2`)
    .then(response => response.json())
    .then(citiesFound => {

        let firstCity = citiesFound[0];
        console.log(firstCity.lat);
        console.log(firstCity.lon);

        return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=566a2801aa6d2ed7467b0b0d21c0d5c2${choseUnit}`)
    })



    .then(response => response.json())    
    .then(data =>{

        let tempEl = "Temp " + data.list[0].main.temp +"C"

       
        document.querySelector(".card-title").textContent = cityEl + "   ( " + timeEl + " )";
        document.querySelector(".card-subtitle").innerHTML = "<img src=\"http://openweathermap.org/img/wn/02n@2x.png\">"
        document.querySelector(".temp").textContent = tempEl
        document.querySelector(".wind").textContent = "Wind: " + data.list[0].wind.speed + "KPH"
        document.querySelector(".humidity").textContent = "Humidity: " + data.list[0].main.humidity + "%"

        console.log(data);

        console.log(data.list[0].weather[0].icon);
        console.log("C ", data.list[0].main.temp, " C ");
        console.log("Wind ",data.list[0].wind.speed,"KPH");
        console.log("Humidyty ",data.list[0].main.humidity , "%");

    }) 
 }) 
 document.querySelector(".card-title").textContent = (localStorage.getItem("City")) + "   ( " + timeEl + " )";

 })
