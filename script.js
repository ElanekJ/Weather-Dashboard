

$(document).ready(function() {

let cities = ["Berlin", "Paris","Edinburgh","Madrid","Birmingham","London"];
for (let i = 0; i < cities.length; i++) {

    let cityBtn = $("<button>");
    cityBtn.addClass("city-button city-button-color");
    cityBtn.text(cities[i]);
    $("#history").append(cityBtn);
}
})



$("button").on("click", function(){

    fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=566a2801aa6d2ed7467b0b0d21c0d5c2")
    .then(response => response.json())
    .then(citiesFound => {

        let firstCity = citiesFound[0];
        console.log(firstCity.lat);
        console.log(firstCity.lon);

        return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=566a2801aa6d2ed7467b0b0d21c0d5c2`)
    })



    .then(response => response.json())    
    .then(data =>{

        console.log(data);
    })

})