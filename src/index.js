import "./assets/scss/main.scss";
import sidebar from "./js/sidebar";

window.addEventListener("DOMContentLoaded", function () {

  "use strict";

  let slider = require('./js/slider.js'),
  scroll = require('./js/scroll.js');

  sidebar();
  slider();
  scroll();

});