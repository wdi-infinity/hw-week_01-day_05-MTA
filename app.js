var N = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
N.name = "N";
var L = ["8th", "6th", "Union Square", "3rd", "1st"];
L.name = "L";
var six = [
  "Grand Central",
  "33rd",
  "28th",
  "23rd",
  "Union Square",
  "Astor Place"
];
six.name = "6";

function planTrip(startLine, startStation, endLine, endStation) {
  var stops1 = 0;
  var stops2 = 0;
  var start = startLine.indexOf(startStation);
  var end = endLine.indexOf(endStation);
  var change1 = startLine.indexOf("Union Square");
  var change2 = endLine.indexOf("Union Square");
  var startText = `You must travel through the following stops on the `;
  var oneTripText = "";
  var trip1Text = "";
  var trip2Text = "";
  if (startLine.includes(startStation)) {
    if (endLine.includes(endStation)) {
      //on the same line
      if (startLine === endLine || startStation === "Union Square") {
        if (startStation === "Union Square") {
          start = endLine.indexOf("Union Square");
          startLine = endLine;
        }
        startText += `${startLine.name} line:`;
        stops1 = countStops(start, end);
        oneTripText = trip(startLine, start, end, oneTripText);
        return `${startText} ${oneTripText}\n${stops1} stops in total`;
      } else {
        //different lines
        startText += `${startLine.name} line:\n`;
        trip1Text += trip(startLine, start, change1, trip1Text);
        stops1 = countStops(start, change1);
        console.log(stops1);
        trip2Text += trip(endLine, change2, end, trip2Text);
        trip2Text = trip2Text.slice(0, -2); //to remove the last comma
        stops2 = countStops(change2, end);
        console.log(stops2);
        return `${startText} ${trip1Text}\n Change at Union Square\n Your journey continues through the following stops:${trip2Text}.\n ${stops1 +
          stops2} stops in total.`;
      }
    } else {
      console.log(`There is no station with a name ${endStation}`);
    }
  } else {
    console.log(`There is no station with a name ${startStation}`);
  }
}
function trip(line, startStation, lastStation, str) {
  if (startStation < lastStation) {
    startStation++; //I don't want to print the first station.
    for (startStation; startStation <= lastStation; startStation++) {
      str += ` ${line[startStation]}, `;
    }
    return `${str}`;
  } else if (startStation > lastStation) {
    startStation--; //I don't want to print the first station.
    for (startStation; startStation >= lastStation; startStation--) {
      str += ` ${line[startStation]}, `;
    }
  }
  return `${str}`;
}

function countStops(startStation, lastStation) {
  var stops = 0;
  if (startStation < lastStation) {
    for (startStation; startStation < lastStation; startStation++) {
      stops++;
    }
    return stops;
  } else if (startStation > lastStation)
    for (startStation; startStation > lastStation; startStation--) {
      stops++;
    }
  return stops;
}
