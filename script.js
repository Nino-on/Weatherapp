$("#carouselExampleIndicators").hide();





function searchCity(){
  $("#carouselExampleIndicators").show();
  var city=$("#cityInput").val();
  
  var key="d38418862217e9ce782d6a1924241e3b";
  var queryURL ="https://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=imperial&appid="+key



  $.ajax({
  type: "GET",
  url: queryURL,
  async: true,
  dataType: "json",
  success: function (response) {
    console.log(response);
    console.log(response.list[0].weather[0].description);
    console.log(response.list[0].main.humidity);
    //console.log(response.city.name);

    $("#cityName").text(response.city.name);
    $("#cityHumidity").append(response.list[0].main.humidity);
    $("#cityTemp").append(response.list[0].main.temp);
    $("#cityWindSpeed").append(response.list[0].wind.speed);

 //Day one
$("#cityNameOne").text(response.city.name);
$("#cityHumidityOne").append(response.list[8].main.humidity);
$("#cityTempOne").append(response.list[8].main.temp);
$("#cityWindSpeedOne").append(response.list[8].wind.speed);

//Day two
$("#cityNameTwo").text(response.city.name);
$("#cityHumidityTwo").append(response.list[16].main.humidity);
$("#cityTempTwo").append(response.list[16].main.temp);
$("#cityWindSpeedTwo").append(response.list[16].wind.speed);

//Day three
$("#cityNameThree").text(response.city.name);
$("#cityHumidityThree").append(response.list[24].main.humidity);
$("#cityTempThree").append(response.list[24].main.temp);
$("#cityWindSpeedThree").append(response.list[24].wind.speed);

//Day four
$("#cityNameFour").text(response.city.name);
$("#cityHumidityFour").append(response.list[32].main.humidity);
$("#cityTempFour").append(response.list[32].main.temp);
$("#cityWindSpeedFour").append(response.list[32].wind.speed);
 
//Day five
$("#cityNameFive").text(response.city.name);
$("#cityHumidityFive").append(response.list[40].main.humidity);
$("#cityTempFive").append(response.list[40].main.temp);
$("#cityWindSpeedFive").append(response.list[40].wind.speed);
  }
  })
}

