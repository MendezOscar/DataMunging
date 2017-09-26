const football = require('./src/Football');
const weather = require('./src/Weather');
const weatherResult = new weather();
console.log(weatherResult.weather());
const footballResult = new football();
console.log(footballResult.football());