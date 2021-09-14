const fs = require('fs')

var ageDataArr = [];
var deathDataArr = [];

// fs.appendFile('allPokerhands.txt', "1,1,1,2,1,2,1,4,1,5,5\n", () => { })

fs.readFile('cases_by_age_group.csv', (err, ageData) => {
    if (err) {
        throw err;
    }
    fs.readFile('deaths_by_age_group.csv', (err, deathsData) => {
        if (err) {
            throw err;
        }

        deathsData = deathsData.toString();
        ageData = ageData.toString();


        // console.log(data.replace(/(?:\r\n|\r|\n)/g, ",").split(","))
        deathDataArr = deathsData.split("\r\n");
        ageDataArr = ageData.split("\r\n");

        for (let i in deathDataArr) {
            deathDataArr[i] = deathDataArr[i].split(",");
            ageDataArr[i] = ageDataArr[i].split(",");
        }
        deathDataArr = deathDataArr.slice(3);
        ageDataArr = ageDataArr.slice(3);

        var allData = [];
        for (let i = 0; i < deathDataArr.length; i++) {
            var deathsRow = deathDataArr[i];
            var casesRow = ageDataArr[i];
            allData.push({})
            allData[i] = {
                group: deathsRow[0],
                percentOfDeaths: Number(deathsRow[1].replace('<', '')),
                totalNumberOfDeaths: Number(deathsRow[2]),
                percentOfUSPopulation: Number(deathsRow[3]),
                percentOfCases: Number(casesRow[1]),
                totalNumberOfCases: Number(casesRow[2]),
                percentOfUSPopulation: Number(casesRow[3])
            }
        }

        var totalCases = 0;
        var totalDeaths = 0;
        console.log("\n% of positive cases in the U.S. resulting \nin deaths per age group:")
        allData.forEach(ageGroup => {
            totalCases += ageGroup.totalNumberOfCases;
            totalDeaths += ageGroup.totalNumberOfDeaths
            calcDeathRate(ageGroup)
            console.log(ageGroup.group, ageGroup.deathRate.toFixed(4) + "%")
        });
        console.log("total death rate: ", (totalDeaths / totalCases * 100).toFixed(4) + "%")

        // allData = allData.sort((a, b) => {
        //     return a.deathRate - b.deathRate
        // })

        console.log("number of deaths by age group in the US and \n% contribution to total deaths in US")
        for (let age of allData) {
            console.log(age.group, age.totalNumberOfDeaths, (age.totalNumberOfDeaths / totalDeaths * 100).toFixed(4) + "%")
        }
        ///////////

        var under40Deaths = 0;
        var over40Deaths = 0;
        for (let i = 0; i < allData.length; i++) {
            if (i < 6) {
                under40Deaths += allData[i].totalNumberOfDeaths;
            } else {

                over40Deaths += allData[i].totalNumberOfDeaths;
            }
        }
        console.log("Total deaths of people under 40 in the US: ", under40Deaths)
        console.log("Total deaths of people over  40 in the US: ", over40Deaths)

    });
});

function calcDeathRate(ageGroup) {
    var deathRate = ageGroup.totalNumberOfDeaths / ageGroup.totalNumberOfCases * 100

    ageGroup.deathRate = deathRate;
}

