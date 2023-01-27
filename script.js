






fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=566a2801aa6d2ed7467b0b0d21c0d5c2")
    .then(response => response.json())
    .then(data => {

        console.log(data);
    })


fetch("https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=566a2801aa6d2ed7467b0b0d21c0d5c2")
    .then(response => response.json())    
    .then(data =>{

        console.log(data);
    })