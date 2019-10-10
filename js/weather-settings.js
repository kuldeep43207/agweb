"use strict";

/**
 * Fething the Latest Weather Report based on the user saved prefrences and update the Widgets accordingly.
 **/

var getLatestChange = function getLatestChange() {
  var q1 = window.localStorage.getItem("weatherQuery");
  var sel_loc = window.localStorage.getItem("userSelectedLoc");
  var query = encodeURI(q1);
  var url = "https://api.weather.com/v3/location/search?query=" + query + "&language=en-US&format=json&apiKey=383165ce8cd802a89c42ae45a96c2e87";
  fetch(url).then(function (res) {
    return res.json();
  }).then(function (data) {
    console.log(data);

    if (data.location !== undefined) {
      var _data$location = data.location,
          address = _data$location.address,
          latitude = _data$location.latitude,
          longitude = _data$location.longitude;
      var index = address.indexOf(sel_loc);
      window.localStorage.setItem("lat", latitude[index]);
      window.localStorage.setItem("long", longitude[index]);
    }
  }).catch(function (err) {
    console.log("Error While fetching Weather Report", err);
  });
};
/**
 *
 * Update The widget On Page Load and adding Scripts Dynamicaly
 *
 **/


var UpdateWeather = function UpdateWeather() {
  var lat = window.localStorage.getItem("lat") || 41.58;
  var long = window.localStorage.getItem("long") || -93.62;
  var x = document.querySelector("#header-weather-modal");
  x.innerHTML = ' <button aria-label="Close reveal" class="close-button" data-close="" type="button"><span aria-hidden="true">\xD7</span></button> <script type="text/javascript" src="https://webwidgets.wsi.com/wxwidget.loader.js?cid=891672306"></script> <wx-widget latitude=' + lat + " longitude=" + long + ' type="current-conditions"></wx-widget> <wx-config group="true" language="en" latitude=' + lat + " longitude=" + long + ' type="current-conditions"></wx-config> <p> <wx-widget group="true" type="daily-forecast"></wx-widget> </p> <p> <wx-widget group="true" type="search"></wx-widget> </p> <p><a href="/weather/weather-10-day-forecast/">Click for extended forecast</a> <a href="/weather/forecast/">Click for radar</a> <a href="/weather/precipitation-maps/">Precipitation maps</a> <a href="/weather/temperature-maps/">Temperature maps</a> <a href="/weather/soil-maps/">Soil maps </a><a href="/weather/ag-weather-maps/">Growing conditions</a><a href="/weather"> Weather News</a></p>';
  var y = document.querySelector("#header-weather-modal-button");
  y.innerHTML = '<button aria-label="Open Weather reveal" class="button" data-open="header-weather-modal"><script type="text/javascript" src="https://webwidgets.wsi.com/wxwidget.loader.js?cid=891672306"></script><wx-widget latitude=' + lat + " longitude=" + long + ' type="current-conditions"></wx-widget></button></p>';
};

UpdateWeather();
/**
 * Setting Timeout as the script loads asynchronously and take time to fetch the Updated DOM
 **/

setTimeout(function () {
  var inputSelector = document.querySelectorAll(".wxmap--search__input");

  if (inputSelector !== null) {
    inputSelector.forEach(function (el) {
      el.addEventListener("input", function (e) {
        var inp = e.target.value; // console.log(inp);

        window.localStorage.setItem("weatherQuery", inp);
        window.localStorage.setItem("changed", true);
        getLatestChange();
      });
      el.addEventListener("blur", function (e) {
        var inp = e.target.value;
        window.localStorage.setItem("userSelectedLoc", inp);
        getLatestChange();
      });
    });
  }
}, 5000);
/**
 * Checking weather user Updated the Location or Not
 **/

var changed = JSON.parse(window.localStorage.getItem("changed"));

if (changed == true) {
  getLatestChange();
}
