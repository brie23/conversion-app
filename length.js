/*
  Author: Brianna Eaddy
  Date: 07/23/2020
  Purpose: Purpose of these functions will allow the user to convert to inches
    to centimeters.
*/

/*
   updateTable will update the information display table and show the calculated
   value from the calculateCentimeters function. The numerical value displayed 
   will be in centimeters. 
*/
function updateTable() {
  	var centimeters = (document.getElementById("inches").value) * 2.54;
    document.getElementById("centimetersDisplay").innerHTML = centimeters;

}