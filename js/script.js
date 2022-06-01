// Cristiano
// ICS2O-Unit6-04-HTML
// June 1 2022

'use strict'
/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-04-HTML/sw.js", {
    scope: "/ICS2O-Unit6-04-HTML/",
  })
}

/**
 * Calculates the area of a trapezoid using the varibles in the URL on load.
 */
window.onload = function() {
  const params = new URLSearchParams(document.location.search)
  const sideA = parseInt(params.get('a'))
  const sideB = parseInt(params.get('b'))
  const height = parseInt(params.get('h'))
  var answer = ((sideA + sideB) / 2) * height

  if (sideA && sideB && height) {
    document.getElementById("varibles").innerHTML = "<h5>a = " + sideA + "</h5>" + "<h5>b = " + sideB + "</h5>" + "<h5>h = " + height + "</h5>"
  } else {
    document.getElementById("varibles").innerHTML = "<h5>a = null</h5>" + "<h5>b = null</h5>" + "<h5>h = null</h5>"
    answer = 0
  }
  document.getElementById("answer").innerHTML = "<h4>The area of this trapezoid is " + answer + "cm².</h4>"
}
