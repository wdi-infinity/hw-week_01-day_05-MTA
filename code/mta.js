var lines = {
  "N": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th",],
  "L": ["8th", "6th", "Union Square", "3rd", "1st"],
  "6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astorce"]
}

function getStopsString(line, startStop, endStop) {
  var lineArray = lines[line];
  var stopsString = "";
  var stopsCount = 0;
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
  console.log(stopsString);
  console.log(stopsCount);
}

// "You must travel through the following stops on the X line: stop1, stop2, stop3, stop4."
// "4 stops in total."
function planTrip(startLine, startStop, endLine, endStop) {
  if (startLine === endLine) {
  } else {
    // I don't care about you
  }
}