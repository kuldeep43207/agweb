"use strict";

/**
 *
 * Update The widget On Page Load and adding Scripts Dynamicaly
 *
 **/

var UpdateMainWeather = function UpdateWeather() {
  var lat = localStorage.getItem("lat") || 41.58;
  var long = localStorage.getItem("long") || -93.62;
  var weatherPage = document.querySelector("#weather-main-page-content");
  weatherPage.innerHTML =
   '<script type="text/javascript" src="https://webwidgets.wsi.com/wxwidget.loader.js?cid=891672306"></script><div class="small-12 medium-12 large-12 columns weather-search">' +
   '<wx-widget type="search"></wx-widget></div><div class="small-12 medium-6 large-6 columns"><div class="show-for-small-only current-conditions"><wx-widget latitude=' +
    lat +
    " longitude=" +
    long +
    ' type="current-conditions"></wx-widget></div><div class="hourly-weather-forcast"><h2>Hourly Forecast</h2><wx-widget group="true" latitude=' +
    lat +
    " longitude=" +
    long +
    ' type="hourly-forecast"></wx-widget></div><div class="daily-weather-forcast"><wx-widget group="true" latitude=' +
    lat +
    " longitude=" +
    long +
    ' type="daily-forecast"></wx-widget></div></div><div class="small-12 medium-6 large-6 columns"><div class="hide-for-small-only current-conditions"><wx-widget latitude=' +
    lat +
    " longitude=" +
    long +
    ' type="current-conditions"></wx-widget></div><div class="weather-map"><h2>Radar</h2><wx-widget fullscreen="true" language="en" latitude=' +
    lat +
    " longitude=" +
    long +
    ' mapid="0002" memberid="1295" menuitems="0017,0021,0009,0015,0002" type="map" units="e" zoomlevel="3"></wx-widget></div></div>';
};

UpdateMainWeather();
