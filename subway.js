var unionSquare = 'Union Square'
var subway = { N : ['TS','34','28',unionSquare,'23'] ,
 L : ['8th', '6th', unionSquare, '3rd', '1st'], 
six: ['Grand Central', '33rd', '28th', '23rd', unionSquare,'Astor Place']
} 


var go = function(i){
if(subway.N.includes(i) ) {
for (var i = 0; i < subway.N.length ; i++)
{
    console.log('you pass ' + subway.N[i]);
}
}
if(subway.L.includes(i) ) {
    for (var i = 0; i < subway.L.length ; i++)
    {
        console.log('you pass  ' + subway.L[i]);
    }
    }

 if(subway.six.includes(i) ) {
        for (var i = 0; i < subway.six.length ; i++)
        {
            console.log('you pass ' + subway.six[i]);
        }
        }
    
else {
console.log('wrong input')
}}