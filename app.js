console.log("corona tracker");



async function getcoronadata()
{

try{
    let coviddata = await fetch('https://api.covid19api.com/summary');
    // console.log(coviddata);
    let jsondata = await coviddata.json();
    // console.log(jsondata);
    let countries = jsondata.Countries;
    // console.log(countries);
    let data = "<tr><th>Country</th><th>Date</th><th>Total Confirmed</th><th>Total Deaths</th><th>New Confirmed</th><th>New Deaths</th><th>New Recovered</th></tr>"
     for(id in countries){
        // console.log(id);
        // console.log(countries);
        console.log(countries[id].Date);

        data +=`<tr><td>${countries[id].Country}</td> <td>${countries[id].Date}</td><td>${countries[id].TotalConfirmed}</td><td>${countries[id].TotalDeaths}</td><td>${countries[id].NewConfirmed}</td><td>${countries[id].NewDeaths}</td><td>${countries[id].NewRecovered}</td></tr>`
        // console.log(data);
    }
        document.getElementById("data").innerHTML = data;
        console.log(data);
}catch(error)
{
    console.log(error);
}



}

getcoronadata()