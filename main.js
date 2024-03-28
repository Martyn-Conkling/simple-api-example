
  
// You should change this function to your desired preset, or refactor the function to populate field data from a list of places and times
function setPreset(){
    document.getElementById("apiKey").value = config.API_KEY ;
    document.getElementById("lat").value = 25.048 ;
    document.getElementById("lon").value = 121.532;
    document.getElementById("time").value = 1675785600;
}



async function fetchData() {  
    //This is using the single time call of historical data check the documentation for details
    // see the "Weather data for timestamp" section of the page here: https://openweathermap.org/api/one-call-3
    // The API call is according to the format below, NOTE you will need to create an account and an API key for this project to work
    // https://api.openweathermap.org/data/3.0/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid={API key}

    console.log("fetching data from api.openweathermap.org")
    const apiKey = document.getElementById("apiKey").value;
    const lat = document.getElementById("lat").value;
    const lon = document.getElementById("lon").value;
    // for the dt parameter: Timestamp (Unix time, UTC time zone), e.g. dt=1586468027. Data is available from January 1st, 1979 till 4 days ahead from today's date
    const time =  document.getElementById("time").value;
   
    const apiUrl = `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${apiKey}`


    const response = await fetch(apiUrl);
    const data = await response.json();
    document.getElementById("dataContainer").innerHTML = JSON.stringify(data, null, 2);
  }


// Working with Unix Time Data
 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
//  You can easily create Unix Time data by simply using the Date.now() method and dividing it by 1000 so it is in seconds not miliseconds
//  const rightNowUnixTime = Date.now() / 1000






// The convertToUnixTime() function takes a string argument dateString that represents a date and time in a format that can be parsed by the Date constructor.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date

// The Date constructor is used to create a Date object from the dateString. 
// The getTime() method is then called on the Date object to get the number of milliseconds since the Unix epoch (January 1, 1970, at 00:00:00 UTC),
// and the result is divided by 1000 to convert it to seconds.
// Here's an example of how you can use the function:

function example(){
    const dateString = '2022-12-31 12:00:00';
    console.log("example date string: ", dateString);
    const unixTime = convertToUnixTime(dateString);
    console.log("converted to unix time: ",unixTime); // 1609459200
}

function convertToUnixTime(dateString) {
    if(typeof dateString === "string"){
        const unixTime = new Date(dateString).getTime() / 1000;
        return unixTime
    }else{
        console.log("You did not provide a date string")
        // Note the constructor for new Date() has many acceptable arguments
    }
}
// This will console log the example when the page loads
example();

