const AbstractDataMunging = require('../src/AbstractDataMunging');
module.exports = class Football extends AbstractDataMunging
{
    construct(){
        loadDataFile('data/football.dat');
    }
    football(){
        lineStartData  = 2;
        lengthEachInfo = 2;
        forStartPosition     = 44;
        againstStartPosition = 51;
        teamNameStartPosition = 7;
        teamNameLength        = 15;
        teamWithSmallestDiff = 0;
        smallestDiff         = 100;
        lines =loadDataFileToArrayOfLines();
        for (i = 1; i < lineStartData; i++) {
            array_shift(lines);
        }
        lines.foreach (function(teamLine) {
            if ('--' === substr(teamLine, forStartPosition -1, lengthEachInfo) ) {
       
            }
            forGoals      = parseInt(substr(teamLine, forStartPosition -1, lengthEachInfo));
            againstGoals  = parseInt(substr(teamLine, againstStartPosition -1, lengthEachInfo));
            goalsDiff = abs(forGoals - againstGoals);
            if (smallestDiff >= goalsDiff ) {
                smallestDiff = goalsDiff;
                teamWithSmallestDiff = trim(substr(teamLine, teamNameStartPosition,teamNameLength));
            }
        });
        return teamWithSmallestDiff;
    }
}