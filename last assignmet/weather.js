
let label = document.getElementById('weather_label');
navigator.geolocation.getCurrentPosition(setLabel);

//response from api
function setLabel(position) 
{
let link = 'http://api.weatherunlocked.com/api/current/'+
			 + position.coords.latitude +
			 + position.coords.longitude
			 + '?app_id=e94bf148' + '&app_key=36e2988db458d12c8202e2d60fd20bbf';
			 //from https://developer.weatherunlocked.com/

var request = new XMLHttpRequest();
request.addEventListener("load", weather);
request.open("GET", link);
request.responseType = "json";
request.send();
}


function weather(insert) {	

data = insert.currentTarget.response;

labelText = " Weather: " + data.wx_desc
			+ " Temperature: " + data.temp_c + "°C" + " Humidity: " + data.humid_pct 
label.innerHTML = labelText;
}
