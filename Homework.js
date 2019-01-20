

var subway=[{ Line:"N" , stops:["Times Square", "34th", "28th", "23rd", "Union Square",  "8th"]},
{Line:"L" ,stops:["8th", "6th","Union Square","Astor Place"]},
{Line:"6",stops:["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]}]



function stopsBetweenStations (sLine,sStation,eLine,eStation){
    var End=0 ; 
    var Start=0 ;
    var stops=0;
    var str="";
    var str2="";
    for(var j = 0; j < subway.length; j++)
    {
    if(subway[j].Line === sLine)
    {
    Start=j;
    //get the First station position
    }}
    
    for(var i = 0; i < subway.length; i++) 
    {
     if(subway[i].Line === eLine)
    {
    End=i;
    //get the End station position
    }}
    
    if (subway[Start].stops.indexOf("Union Square")> subway[Start].stops.indexOf(sStation))
     // check if the first train moving forward or backward
    {
    stops+=subway[Start].stops.indexOf("Union Square")-subway[Start].stops.indexOf(sStation);
    for(var i=subway[Start].stops.indexOf(sStation); i<subway[Start].stops.indexOf("Union Square");i++)
    {
    str+=subway[Start].stops[i]+", "; 
    //add the stops stations for the first line if the train moving forward
    }
    }  
    
    else
    {
    stops+=subway[Start].stops.indexOf(sStation)-subway[Start].stops.indexOf("Union Square");
    for(var i=subway[Start].stops.indexOf("Union Square"); i>subway[Start].stops.indexOf(sStation);i--)
    {
    str+=subway[Start].stops[i]+", "; 
    //add the stops stations for the first line if the train moving backward
    }
    }
    
    if(subway[End].stops.indexOf(eStation)>subway[End].stops.indexOf("Union Square"))
    {
    // check if the second train moving forward or backward
    stops+=subway[End].stops.indexOf(eStation)-subway[End].stops.indexOf("Union Square")
    
    for(var i=subway[End].stops.indexOf("Union Square"); i<subway[End].stops.indexOf(eStation);i++)
    {
    str2+=subway[End].stops[i]+", ";
    //add the stops stations for the End line if the train moving forward
    
    }
    
    }
    else
    {
    stops+=subway[End].stops.indexOf("Union Square")-subway[End].stops.indexOf(eStation);
    for(var i=subway[End].stops.indexOf("Union Square"); i>subway[End].stops.indexOf(eStation);i--)
    {
    str2+=subway[End].stops[i]+", ";
    //add the stops stations for the End line if the train moving backward
    }}
    
    if(sLine!=eLine){
    console.log( "You must travel through the following stops on the "+sLine+" line: "+str +" Union Squre.")
    console.log( "Change at Union Square.");
    console.log("Your journey continues through the following stops:"+ str2 +eStation+".");
    
    }else 
    {
    
    console.log( "You must travel through the following stops on the "+sLine+" line: "+str +str2+ eStation+".")
    }
    console.log(stops+ " stops in total.");
    }
    