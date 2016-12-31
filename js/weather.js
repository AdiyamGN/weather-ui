
if("geolocation" in navigator) {
	navigator.geolocation.getCurrentPosition(function(position) {
		loadWeather(position.coords.latitude + ',' + position.coords.longitude);
	});
}
else {
	loadWeather("Kolkata, IN", "");
}

$(document).ready(function() {
	
	var dt = new Date();
	var time = dt.toLocaleTimeString().replace(/:\d+ /, ' ');
	$("#time").text(time);
	
});



function loadWeather(location, woeid) {

	$.simpleWeather({
		location: location,
		woeid: woeid,
		unit: 'f',

		success: function(weather) {
			city = '<p class="location">' + weather.city + ',' + weather.region +  '</p>';
			time = weather.title;
			tempF = weather.temp+'&deg;';
			tempC = weather.alt.temp+'&deg';

			date = weather.forecast[0].date;
			date_1 = weather.forecast[1].day;
			date_2 = weather.forecast[2].day;
			date_3 = weather.forecast[3].day;
			date_4 = weather.forecast[4].day;
			date_5 = weather.forecast[5].day;
			date_6 = weather.forecast[6].day;

			temp_1 = weather.forecast[1].high+'&deg;';
			temp_2 = weather.forecast[2].high+'&deg;';
			temp_3 = weather.forecast[3].high+'&deg;';
			temp_4 = weather.forecast[4].high+'&deg;';
			temp_5 = weather.forecast[5].high+'&deg;';
			temp_6 = weather.forecast[6].high+'&deg;';

			wcode = '<img class="today-weather-icon" src="images/weathericons/' + weather.code + '.svg">';
			wcode_1 = '<img class="weathericon" src="images/weathericons/' + weather.forecast[1].code + '.svg">';
			wcode_2 = '<img class="weathericon" src="images/weathericons/' + weather.forecast[2].code + '.svg">';
			wcode_3 = '<img class="weathericon" src="images/weathericons/' + weather.forecast[3].code + '.svg">';
			wcode_4 = '<img class="weathericon" src="images/weathericons/' + weather.forecast[4].code + '.svg">';
			wcode_5 = '<img class="weathericon" src="images/weathericons/' + weather.forecast[5].code + '.svg">';
			wcode_6 = '<img class="weathericon" src="images/weathericons/' + weather.forecast[6].code + '.svg">';

			$("#city").html(city);
			$("#day-0-temp").html(tempF);
			$(".climate-bg").html(wcode);
			$("#date-0").text(date);

			$("#day-1").text(date_1);
			$("#day-2").text(date_2);
			$("#day-3").text(date_3);
			$("#day-4").text(date_4);
			$("#day-5").text(date_5);
			$("#day-6").text(date_6);

			$(".image-1").html(wcode_1);
			$(".image-2").html(wcode_2);
			$(".image-3").html(wcode_3);
			$(".image-4").html(wcode_4);
			$(".image-5").html(wcode_5);
			$(".image-6").html(wcode_6);

			$("#day-1-temp").html(temp_1);
			$("#day-2-temp").html(temp_2);
			$("#day-3-temp").html(temp_3);
			$("#day-4-temp").html(temp_4);
			$("#day-5-temp").html(temp_5);
			$("#day-6-temp").html(temp_6);

		},

		error: function(error) {
			$(".error").html('<p>' + error + '</p>');
		}


	})

}