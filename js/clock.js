showDiff();

function showDiff(){
    var date1 = new Date("05/20/2017 17:59:49");   
    var date2 = new Date();
    //Customise date2 for your required future time
    
    var diff = (date1 - date2)/1000;
    var diff = Math.abs(Math.floor(diff));
    
    var years = Math.floor(diff/(365*24*60*60));
    var leftSec = diff - years * 365*24*60*60;
  
    var month = Math.floor(leftSec/((365/12)*24*60*60));
    var leftSec = leftSec - month * (365/12)*24*60*60;    
    
    var days = Math.floor(leftSec/(24*60*60));
    var leftSec = leftSec - days * 24*60*60;
    
    var hrs = Math.floor(leftSec/(60*60));
    var leftSec = leftSec - hrs * 60*60;
      
    var min = Math.floor(leftSec/(60));
    var leftSec = leftSec - min * 60;
    
    var qw= Math.floor(leftSec/10); 
    var q= leftSec%10;
    
    $("#d").text(''+qw);
    $("#da").text(''+qw);
    $("#ds").text(''+q);
    $("#df").text(''+q);
    
  
setTimeout(showDiff,1000);
}


