planTrip("N", "Times Square", "6", "33rd"); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

//create an array for each line

function planTrip(from_subway,from_station,to_subway,to_station) { 

    var nLine = ['Times Square','34th','28th','23rd','Union Square','8th'];
    var sixLine = ['Grand Central','33rd','28th','23rd','Union Square','Astor Place'];
    var lLine = ['8th','6th','Union Square','3rd','1st'];
    var count = 0;  // to count number of steps in the first line
    var count2 = 0;  // to count number of steps in the second line
    var result;
    var i; //store the index of the from_station
    
    //1
    if(from_subway === "N" && to_subway === "6"){
    
        i = nLine.indexOf(from_station)
        if(nLine.includes(from_station) && sixLine.includes(to_station)) {
        for( i ; i < nLine.length ; i++){ // the array starts at the index of the from_station
			count++;
			if(nLine.includes('Union Square')){ //to switch the station
                for(var j = 0 ; i < sixLine.length ; i++ ){ 
					count2++;
					if(sixLine.includes(to_station)){
						console.log('welcome to '+ to_station);
			}
			
        }
        
        } 
    }} 
}
    //2
   else if(from_subway === "N" && to_subway === "L"){

    i = nLine.indexOf(from_station)
    if(nLine.includes(from_station) && lLine.includes(to_station)) {
    for( i ; i < nLine.length ; i++){ // the array starts at the index of the from_station
        count++;
        if(nLine.includes('Union Square')){ //to switch the station
            for(var j = 0 ; i < lLine.length ; i++ ){ 
                count2++;
                if(lLine.includes(to_station)){
                    console.log('welcome to '+ to_station);
        }
        
    }
    
    } 
}} 

    } 

    //3
    else if(from_subway === "6" && to_subway === "N"){

        i = sixLine.indexOf(from_station)
        if(sixLine.includes(from_station) && nLine.includes(to_station)) {
        for( i ; i < sixLine.length ; i++){ // the array starts at the index of the from_station
            count++;
            if(sixLine.includes('Union Square')){ //to switch the station
                for(var j = 0 ; i < nLine.length ; i++ ){ 
                    count2++;
                    if(nLine.includes(to_station)){
                        console.log('welcome to '+ to_station);
            }
            
        }
        
        } 
    } 
    }}
    //4
    else if(from_subway === "6" && to_subway === "L"){

        var i = sixLine.indexOf(from_station)
        for( i ; i < sixLine.length ; i++){ // the array starts at the index of the from_station
            count++;
            if(sixLine.includes('Union Square')){ //to switch the station
                for(var j = 0 ; i < lLine.length ; i++ ){ 
                    count2++;
                    if(lLine.includes(to_station)){
                        console.log('welcome to '+ to_station);
            }
            
        }
        
        } 
    } 

    }

    //5
    else if(from_subway === "L" && to_subway === "N"){

        i = lLine.indexOf(from_station)
        if(lLine.includes(from_station) && nLine.includes(to_station)) {
        for( i ; i < lLine.length ; i++){ // the array starts at the index of the from_station
            count++;
            if(lLine.includes('Union Square')){ //to switch the station
                for(var j = 0 ; i < nLine.length ; i++ ){ 
                    count2++;
                    if(nLine.includes(to_station)){
                        console.log('welcome to '+ to_station);
            }
            
        }
        
        } 
    } 

    }}

    //6
    else if(from_subway === "L" && to_subway === "6"){

        i = lLine.indexOf(from_station)
        if(lLine.includes(from_station) && sixLine.includes(to_station)) {
        for( i ; i < lLine.length ; i++){ // the array starts at the index of the from_station
            count++;
            if(lLine.includes('Union Square')){ //to switch the station
                for(var j = 0 ; i < sixLine.length ; i++ ){ 
                    count2++;
                    if(sixLine.includes(to_station)){
                        console.log('welcome to '+ to_station);
            }
            
        }
        
        } 
    } 

    } }
    //7
    else if(from_subway === "N" && to_subway === "N"){

        i = nLine.indexOf(from_station)
        j = nLine.indexOf(to_station)
        if(nLine.includes(from_station) && nLine.includes(to_station)) {
        for( i ; i <=j ; i++){ // the array starts at the index of the from_station
			count++;  
    } 
    }
} 

//8
else if(from_subway === "L" && to_subway === "L"){

    i = lLine.indexOf(from_station)
    j = lLine.indexOf(to_station)
    if(lLine.includes(from_station) && lLine.includes(to_station)) {
    for( i ; i <=j ; i++){ // the array starts at the index of the from_station
        count++;  
} 
}
} 

//9
else if(from_subway === "6" && to_subway === "6"){

    i = sixLine.indexOf(from_station)
    j = sixLine.indexOf(to_station)
    if(sixLine.includes(from_station) && sixLine.includes(to_station)) {
    for( i ; i <=j ; i++){ // the array starts at the index of the from_station
        count++;  
} 
}
} 


result = count + count2;
return result; }

