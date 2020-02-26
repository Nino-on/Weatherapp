$("#carouselExampleIndicators").hide();





function searchCity(){
  $("#carouselExampleIndicators").show();
  var city=$("#cityInput").val();
  
  var key="d38418862217e9ce782d6a1924241e3b";
  var queryURL ="https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid="+key



  $.ajax({
  type: "GET",
  url: queryURL,
  async: true,
  dataType: "json",
  success: function (response) {
    console.log(response);
    console.log(response.list[0].weather[0].description);
  }
  })
}

