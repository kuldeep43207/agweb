"use strict";

/**
 *
 * Update The widget On Page Load and adding Scripts Dynamicaly
 *
 **/

var UpdateForeCastWeather = function UpdateWeather() {
  var lat = localStorage.getItem("lat") || 41.58;
  var long = localStorage.getItem("long") || -93.62;
  var weatherTenday = document.querySelector("#weather-ten-day-forecast");
  weatherTenday.innerHTML =
   '<script type="text/javascript" src="https://webwidgets.wsi.com/wxwidget.loader.js?cid=891672306"></script><wx-widget type="search"></wx-widget><wx-widget group="true" latitude=' +
   lat +
   " longitude=" +
   long +
   ' type="daily-forecast"></wx-widget><h2>Hourly Forecast</h2><wx-widget group="true" latitude=' +
   lat +
   " longitude=" +
   long +
   ' type="hourly-forecast"></wx-widget>';
};

UpdateForeCastWeather();
