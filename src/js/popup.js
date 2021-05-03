//import _ from "../node_modules/lodash";


//import ephemeris from '../../node_modules/ephemeris/src/index'

//let now = Date.now()
//let now = Date.UTC(2021, 4, 11, 18, 59) // new moon
//let now = Date.UTC(2021, 4, 13, 20, 25) // waxing crescent
//let now = Date.UTC(2021, 4, 19, 20, 25) // first quarter
//let now = Date.UTC(2021, 4, 23, 20, 25) // waxing gibbous
//let now = Date.UTC(2021, 4, 26, 20, 25) // full moon
//let now = Date.UTC(2021, 4, 29, 20, 25) // waning gibbous
let now = Date.UTC(2021, 5, 02, 20, 25) // last quarter
//let now = Date.UTC(2021, 4, 10, 4, 10) // waning crescent



export function moonPhase() {
    
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


let phaseDiv = document.getElementById("phase")
phaseDiv.innerText = (moonPhase())

export function moonPic() {
    switch(moonPhase()) {
        case "New Moon":
            return "src/img/noun_stars_962194.png"
        case "Waxing Crescent":
            return "src/img/noun_waxing Crescent_834872.png"
        case "First Quarter":
            return "src/img/noun_first quarter_834874.png"
        case "Waxing Gibbous":
            return "src/img/noun_waxing gibbous_834875.png"
        case "Full Moon":
            return "src/img/noun_Full Moon_834869.png"
        case "Waning Gibbous":
            return "src/img/noun_waning gibbous_834871.png"
        case "Last Quarter":
            return "src/img/noun_last quarter_834873.png"
        case "Waning Crescent":
            return "src/img/noun_waning crescent_834870.png"
    }
}

document.getElementById("moonImg").src = moonPic()

let currentDate = new Date()

//const result = ephemeris.getAllPlanets(currentDate, 40, 75, 0)

// const origin = new Origin({
//     year: currentDate.getFullYear(),
//     month: currentDate.getMonth(),
//     date: currentDate.getDate(),
//     hour: currentDate.getHours(),
//     minute: currentDate.getMinutes(),
//     latitude: 40,
//     longitude: 75
// })

 //document.getElementById("moonSign").innerText = result


