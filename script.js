 //Set ready website 
$(document).ready(function() {

    //set the cities buttons
    let cities = ["Berlin", "Paris","Edinburgh","Madrid","Birmingham","London"];
    for (let i = 0; i < cities.length; i++) {
        
        let cityBtn = $("<button>");
        cityBtn.addClass("city-button city-button-color");
        cityBtn.text(cities[i]);
        $("#history").append(cityBtn);
    }

        
        

    //set the metrick units
    let choseUnit = "&units=metric";

    //date
    let timeEl = moment().format("DD/MM/YYYY");

    // listening function
    $("button").click(function(event){

        let cityEl = event.target.textContent;
        
       

        let imgEl = event.target    
        localStorage.setItem("image" , cityEl)
        document.querySelector(".card-subtitle").innerHTML = "<img src=\"http://openweathermap.org/img/wn/02n@2x.png\">"
    
   

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
            let windEl = "Wind: " + data.list[0].wind.speed+ "KPH";
            let humidity =  "Humidity: " + data.list[0].main.humidity + "%"
       
            document.querySelector(".card-title").textContent = cityEl + "   ( " + timeEl + " )";
            document.querySelector(".card-subtitle").innerHTML = "<img src=\"http://openweathermap.org/img/wn/02n@2x.png\">"
            document.querySelector(".temp").textContent = tempEl
            document.querySelector(".wind").textContent = windEl 
            document.querySelector(".humidity").textContent = humidity

            // initial storage 
            localStorage.setItem("City" , cityEl);
            localStorage.setItem("temperature" , tempEl);        
            localStorage.setItem("Wind" , windEl);       
            localStorage.setItem("Humidity" , humidity);


            for (let i = 0; i < document.children[0].children[1].children[1].children[0].children[1].children[1].children.length; i++) {
            
                let timeEle = moment(data.list[((i+1)*8)-1].dt, "X").format("DD/MM/YYYY");

                let tempEle = "Temp " + data.list[((i+1)*8)-1].main.temp +"C";
                let windEle = "Wind: " + data.list[((i+1)*8)-1].wind.speed+ "KPH";
                let humiditye =  "Humidity: " + data.list[((i+1)*8)-1].main.humidity + "%";
                document.children[0].children[1].children[1].children[0].children[1].children[1].children[i].querySelector(".card-day").textContent = timeEle;
                document.children[0].children[1].children[1].children[0].children[1].children[1].children[i].querySelector(".card-temp").textContent = tempEle;
                document.children[0].children[1].children[1].children[0].children[1].children[1].children[i].querySelector(".card-wind").textContent = windEle;
                document.children[0].children[1].children[1].children[0].children[1].children[1].children[i].querySelector(".card-humidity").textContent = humiditye;
            
                localStorage.setItem("temperature" , tempEl);        
                localStorage.setItem("Wind" , windEl);       
                localStorage.setItem("Humidity" , humidity);

            }
        }) 
    })

    document.querySelector(".card-title").textContent = (localStorage.getItem("City")) + "   ( " + timeEl + " )";     
    document.querySelector(".card-title").textContent = (localStorage.getItem("City")) + "   ( " + timeEl + " )";
    document.querySelector(".wind").textContent =(localStorage.getItem("Wind"));
    document.querySelector(".temp").textContent = (localStorage.getItem("temperature"));
    document.querySelector(".humidity").textContent =(localStorage.getItem("Humidity"));

})
