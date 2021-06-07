
let now = Date.now()
//let now = Date.UTC(2021, 4, 11, 18, 59) // new moon
//let now = Date.UTC(2021, 4, 13, 20, 25) // waxing crescent
//let now = Date.UTC(2021, 4, 19, 20, 25) // first quarter
//let now = Date.UTC(2021, 4, 23, 20, 25) // waxing gibbous
//let now = Date.UTC(2021, 4, 26, 20, 25) // full moon
//let now = Date.UTC(2021, 4, 29, 20, 25) // waning gibbous
//let now = Date.UTC(2021, 5, 02, 20, 25) // last quarter
//let now = Date.UTC(2021, 4, 10, 4, 10) // waning crescent

function moonPhase() {
    
    let newMoon = Date.UTC(2021, 2, 13, 22, 21)
    let day = (now-newMoon)/86400000
    let days = (day) % 29.53058770576
    
    if(days > 0 && days <= 1) return "New Moon"
    if(days > 28.53058770576 && days <= 29.53058770576) return "New Moon"
    if(days > 1 && days <= 6.38264692644001) return "Waxing Crescent"
    if(days > 6.38264692644001 && days <= 8.38264692644) return "First Quarter"
    if(days > 8.38264692644 && days <= 13.76529385288) return "Waxing Gibbous"
    if(days > 13.76529385288 && days <= 15.76529385288) return "Full Moon"
    if(days > 15.76529385288 && days <= 21.14794077932) return "Waning Gibbous"
    if(days > 21.14794077932 && days <= 23.14794077932) return "Last Quarter"
    if(days > 23.14794077932 && days <= 28.53058770576) return "Waning Crescent"
    }

function mondPhasen() {
    
        let newMoon = Date.UTC(2021, 2, 13, 22, 21)
        let day = (now-newMoon)/86400000
        let days = (day) % 29.53058770576
        console.log(days, "days")

        // switch(days) {
        //     case (days > 0 && days <= 1):
        //         return "Neumnond"
        //     case (days > 28.53058770576 && days <= 29.53058770576):
        //         return "Neumond"
        //     case (days > 1 && days <= 6.38264692644001):
        //         return "Zunehmender Mond"
        //     case (days > 6.38264692644001 && days <= 8.38264692644):
        //         return "Erstes Viertel Mond"
        //     case (days > 8.38264692644 && days <= 13.76529385288):
        //         return "Zunehmender Mond"
        //     case (days > 13.76529385288 && days <= 15.76529385288):
        //         return "Vollmond"
        //     case (days > 15.76529385288 && days <= 21.14794077932):
        //         return "Abnehmender Mond"
        //     case (days > 21.14794077932 && days <= 23.14794077932):
        //         return "Letztes Viertel Mond"
        //     case (days > 23.14794077932 && days <= 28.53058770576):
        //         return "Abnehmender Mond"
        // }
        
        if(days > 0 && days <= 1) return "Neumond"
        if(days > 28.53058770576 && days <= 29.53058770576) return "Neumond"
        if(days > 1 && days <= 6.38264692644001) return "Zunehmender Mond"
        if(days > 6.38264692644001 && days <= 8.38264692644) return "Erstes Viertel Mond"
        if(days > 8.38264692644 && days <= 13.76529385288) return "Zunehmender Mond"
        if(days > 13.76529385288 && days <= 15.76529385288) return "Vollmond"
        if(days > 15.76529385288 && days <= 21.14794077932) return "Abnehmender Mond"
        if(days > 21.14794077932 && days <= 23.14794077932) return "Letztes Viertel Mond"
        if(days > 23.14794077932 && days <= 28.53058770576) return "Abnehmender Mond"
    }
    

let phaseDiv = document.getElementById("phase")
phaseDiv.innerText = moonPhase()

document.getElementById('en').addEventListener("click", en)
function en() {
    phaseDiv.innerText = moonPhase()
}

document.getElementById('de').addEventListener("click", de)
function de() {
    phaseDiv.innerText = mondPhasen()
}

function moonPic() {
    switch(moonPhase()) {
        case "Waxing Crescent":
            return "/noun_waxing Crescent_834872.png"
        case "First Quarter":
            return "/noun_first quarter_834874.png"
        case "Waxing Gibbous":
            return "/noun_waxing gibbous_834875.png"
        case "Full Moon":
            return "/noun_Full Moon_834869.png"
        case "Waning Gibbous":
            return "/noun_waning gibbous_834871.png"
        case "Last Quarter":
            return "/noun_last quarter_834873.png"
        case "Waning Crescent":
            return "/noun_waning crescent_834870.png"
    }
}

document.getElementById("moonImg").src = moonPic()

// const where = document.getElementById("where") 


// navigator.geolocation.getCurrentPosition(function(position) {
//     //console.log(position);
//     where.innerHTML = "Latitude: " + position.coords.latitude.toFixed(3) +
//     "<br>Longitude: " + position.coords.longitude.toFixed(3)
// }, function(positionError) {
//     where.innerHTML = "Location Not Available"
//     console.error(positionError);
// });


//  updates wanted: 

//  1. change if statements to switch cases 
//  2. reverse geocoding for location 
//  3. language default is english 
//  4. calculate zodiac (find and use API)
