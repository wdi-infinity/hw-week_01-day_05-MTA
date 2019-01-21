//first we need to access staion in the same line 
// which use function
//if my trip line in same staionline it's the simple idea to solve the MTA problem
//second idea is if our trip are multiple 
//what i understand is when we have common staion 
//in this point we can declare tow step
//if i can declare one trip line then i can declare multiple trip in same way
//it's not too clear for now , but i do my best.

 
var lines = {
    'N': ['Times Square','34th','28th','23rd','Union Square','8th'],
    '6': ['Grand Central','33rd','28th','23rd','Union Square','Astor Place'], 
    'L': ['8th','6th','Union Square','3rd','1st']
}
​var numberOfStep = 0;

function getStopString(line,startStop, endStop){
 var lineArray = lines[line];
 var stopString = ""; //store the staions name
 var startIndex = lineArray.indexOf(startStop);
 var endIndex = lineArray.indexOf(endStop);
 

 
 if(startIndex < endIndex) {
 for(var i = startStop + 1 ; i<= endStop ; i++){ 
    stopString+= lineArray[i] + ', ';
    numberOfStep ++;
 }
} 
else { //Go backward
    for(var i = startStop - 1 ; i >= endStop ; i--){ 
        stopString+= lineArray[i] + ', ';
        numberOfStep ++;
     }
}} 
console.log(stopString);

function planTrip(from_subway,from_station,to_subway,to_station) { 
    numberOfStep = 0;
 if(from_subway === to_subway ){
​var stopsString=getStopString(line,startStop,endStop);
console.log(""+startLine+""+stopsString)
 } else {
​// trip in same line
getStopString(line,startStop,"Union Square");

console.log("Change at Union Square .")

var secnodStop=getStopString(endLine,"Union Sqare",endStop);
console.log(""+secnodStop+" .");
 }
 console.log(numberOfStep+"in total.")

 //call function planTrip 

 planTrip("","","","");
}
