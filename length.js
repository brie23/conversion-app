/*
  Author: Brianna Eaddy
  Date: August 30, 2020
  Purpose: Purpose of these functions will allow the user to convert to inches
    to centimeters and inches to centimeters depending on the preference of the 
    user, convert it to their respective units, then display the results. 
*/

/*
  setup handles adding onclick functionality to update the units
*/
function setup(){
  document.getElementById("inches").onclick = function(){setUnits("inches");};
  document.getElementById("centimeters").onclick = function(){setUnits("centimeters");};
}

/*
  setUnits takes in a value representing the temperature unit and updates
  the label element text to represent that unit
*/
function setUnits(unit){
  var label = document.getElementById("label");
  label.innerHTML = document.getElementById("measurementDisplay") + unit;
}

/*
  convert determines if the inches button is checked and calls the appropriate
  function to calculate the conversion based on the value of the measurement
  element
*/
function convert(){
  var inchesButton = document.getElementById("inches");
  var measurement = document.getElementById("measurement");

  if(inchesButton.checked){
    convertToInches(measurement.value);
  }
  else {
    convertToCentimeters(measurement.value);
  }
}

/*
  convertToInches takes in a measurement in centimeters and calculates the
  measurement in inches.  It then updates the answer element to state the
  given temperature and its converted value.
*/
function convertToInches(measurementInCentimeters){
  var inchesMeasurement = measurementInCentimeters / 2.54;
  document.getElementById("measurementDisplay").innerHTML = measurementInCentimeters + 
    " centimeters converts to " + inchesMeasurement.toFixed(1) + 
    " inches";
}

/*
  convertToCentimeters takes in a measurement in inches and calculates the
  measurement in centimeters.  It then updates the answer element to state the
  given measruement and its converted value.
*/
function convertToCentimeters(measurementInInches){
  var centimetersMeasurement = measurementInInches * 2.54;
  document.getElementById("measurementDisplay").innerHTML = measurementInInches + 
    " inches converts to " + centimetersMeasurement.toFixed(1) + 
    " centimeters";
}
