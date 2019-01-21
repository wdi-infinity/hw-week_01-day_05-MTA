var lines = {
  "N": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th",],
  "L": ["8th", "6th", "Union Square", "3rd", "1st"],
  "6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astorce"]
}
var stopsCount = 0;

function getStopsString(line, startStop, endStop) {
  var lineArray = lines[line];
  var stopsString = "";
  // SHIFT + ALT + DOWN/UP
  var startStationIndex = lineArray.indexOf(startStop);
  var endStationIndex = lineArray.indexOf(endStop);

  if (startStationIndex < endStationIndex) { // Go forward
    for (var i = startStationIndex + 1; i <= endStationIndex; i++) {
      stopsString += lineArray[i] + ", ";
      stopsCount++;
    }
  } else { // Go backward
    for (var i = startStationIndex - 1; i >= endStationIndex; i--) {
      stopsString += lineArray[i] + ", ";
      stopsCount++;
    }
  }
  return stopsString;
}

// "You must travel through the following stops on the X line: stop1, stop2, stop3, stop4."
// "4 stops in total."
function planTrip(startLine, startStop, endLine, endStop) {
  stopsCount = 0;

  if (startLine === endLine) {
    var returnedStopsString = getStopsString(startLine, startStop, endStop);
    console.log("You must travel through the following stops on the " + startLine + " line: " + returnedStopsString + ".")
  } else {
    // Trip 1 - startStop to Union Square
    var returnedStopsStringTrip1 = getStopsString(startLine, startStop, "Union Square");
    console.log("You must travel through the following stops on the " + startLine + " line: " + returnedStopsStringTrip1 + ".")

    // Change at US
    console.log("Change at Union Square.");

    // Trip 2 - Union Square to endStop
    var returnedStopsStringTrip2 = getStopsString(endLine, "Union Square", endStop);
    console.log("Your journey continues through the following stops on the " + endLine + ": " + returnedStopsStringTrip2 + ".")
  }

  console.log(stopsCount + " stops in total.")
}