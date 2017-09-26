const AbstractDataMunging = require('../src/AbstractDataMunging');
module.exports = class Weather extends AbstractDataMunging
{
    construct() {
        loadDataFile('data/weather.dat');
    }

    weather(){
        var lineStartData = 3;
        var lengthEachInfo = 2;
        var maxStart = 7;
        var minStart = 13;
        var dayOfMinSpread = 0;
        var minSpread = 100;
        var lines = AbstractDataMunging.construct.loadDataFileToArrayOfLines();
        for (i = 1; i < lineStartData; i++) {
            array_shift(lines);
        }
        for (day = 0; day < 30; day++) {
            maxTemp = parseInt(substr(lines[day], maxStart -1, lengthEachInfo));
            minTemp = parseInt(substr(lines[day], minStart -1, lengthEachInfo));
            spread = maxTemp - minTemp;
            if (spread < minSpread ) {
                minSpread = spread;
                dayOfMinSpread = day + 1;
            }
        }
        return dayOfMinSpread;
    }
}