//1st way with function constructor
function WeatherForecast (city, temperature, conditions){
    this.city = city;
    this.temperature = temperature;
    this.conditions = conditions; 
}

let todayForecast = new WeatherForecast("London", 15, "Partly Cloudy");

function convertToFahrenheit(todayForecast){
    let fahrenheit = (todayForecast.temperature * 9/5) + 32;

    return `The weather in ${todayForecast.city} is ${todayForecast.conditions} with a temperature of ${fahrenheit}°F.`;
}

console.log(convertToFahrenheit(todayForecast));




//2nd way with object literal
/*let weatherForecast = {
    city: "London",
    temperature: 15,
    conditions: "Partly Cloudy"
} 

function convertToFahrenheit(weatherForecast){
    let fahrenheit = (weatherForecast.temperature * 9/5) + 32;
    return `The weather in ${weatherForecast.city} is ${weatherForecast.conditions} with a temperature of ${fahrenheit}°F.`;

}

console.log(convertToFahrenheit(weatherForecast)); */

