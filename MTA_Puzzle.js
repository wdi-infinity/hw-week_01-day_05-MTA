
var N = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
var L = ["8th", "6th", "Union Square", "3rd", "1st"];
var six = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];

function getList(name) {
     switch (name) {
       case "N":
          return N ;
        break;
       case "L":
          return L;
        break;
       case "6":
          return six;
        break;
       default:
          return null;
     }
}

function toTitleCase(str) { // to match the array name and what's stored in them!
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function printStation(Line,Start_Station, End_Station, output){
  output = "";
  for(var i=Start_Station; i<=End_Station; i++){
    if (i+1 > End_Station){
      output += Line[i] + ".";
    }else {
      output += Line[i] + ", ";
    }
  }
  return output;
}

function printStationReverse(Line,Start_Station, End_Station, output){
  output = "";
  for( var i=Start_Station; i>=End_Station; i--){
    if (i === End_Station){
      output += Line[i] + ".";
    }else {
      output += Line[i] + ", ";
    }
  } return output;
}

function planTrip(Start_Line, Start_Station, End_Line, End_Station){
    var stops = 0;
    var output = "";
    line1Name = Start_Line;
    line2Name = End_Line;
    Start_Line = getList(toTitleCase(Start_Line));
    End_Line = getList(toTitleCase(End_Line));
    Start_Station = toTitleCase(Start_Station);
    End_Station = toTitleCase(End_Station);

  if (Start_Line !== null && End_Line !== null){ // to check if the subway exists!

    if (line1Name === line2Name) { // SAME line
      if(Start_Line.includes(Start_Station) && End_Line.includes(End_Station)){
          Start_Station = Start_Line.indexOf(Start_Station);
          End_Station = End_Line.indexOf(End_Station);
          stops = Math.abs((Start_Station+1)-(End_Station+1));
          if(Start_Station>End_Station){
            output += printStationReverse(Start_Line,Start_Station-1, End_Station, output);
          }else{
            output += printStation(Start_Line,Start_Station, End_Station, output);
          }
          console.log("You must travel through the following stops on the "+line1Name+" line: "+ output);
          console.log( stops + " stops in total.");
      }else {
        return "Sorry, one or both of your entered Station NOT found!! try again..";
      }
    }else { // NOT same line!
       if(Start_Line.includes(Start_Station) && End_Line.includes(End_Station)){
         Start_Station = Start_Line.indexOf(Start_Station);
         End_Station = End_Line.indexOf(End_Station);
          var intersection1 = Start_Line.indexOf("Union Square");
          var intersection2 = End_Line.indexOf("Union Square");
          var lineOneStops = Math.abs((Start_Station+1)-(intersection1+1));
          var lineTowStops = Math.abs((intersection2+1)-(End_Station+1));
          if(Start_Station>intersection1){
            output = printStationReverse(Start_Line, Start_Station-1, intersection1, output);
          }else{
            output = printStation(Start_Line, Start_Station+1, intersection1, output);
          }
          console.log("You must travel through the following stops on the "+line1Name+" line: "+ output);
          console.log("Change at Union Square.");
          if(End_Station<intersection2){
            output = printStationReverse(End_Line, intersection2-1, End_Station, output);
          }else{
            output = printStation(End_Line, intersection2+1, End_Station, output);
          }
          console.log("Your journey continues through the following stops: "+ output);
          console.log((lineOneStops + lineTowStops)+ " stops in total.");
       }else {
         return "Sorry, one or both of your entered Station NOT found!! try again ..";
       }
     }
  }else {
    return "Sorry, one or both of your entered Line NOT found!! try again ..";
  }

} // function ends here

planTrip("N", "Times Square", "6", "33rd");
planTrip("L", "1st", "N", "Times Square");
planTrip("L", "1st", "6", "Astor Place");
planTrip("L", "1st", "L", "8th");
