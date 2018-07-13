/**
 * 
 */

var n = 0;
function count(){
	
	
	n = n+1;
	 document.getElementById("number").innerHTML=n;
	 zero();
	
}

function zero(){
	
	if(document.getElementById("number").innerHTML=="0"){
		
		 document.getElementById("count").style.display="none";
	}else{
		 document.getElementById("count").style.display="block";
		
	}
	
}



//how many time left 


//showDiff();

function showDiff(X,id){
	
	//alert("time :"+X+"  id :"+id);
    var date1 = new Date();    
    var date2 = new Date(''+X+'');
    //Customise date2 for your required future time
    
    var diff = (date1 - date2)/1000;
    var diff = Math.abs(Math.floor(diff));
    
    var days = Math.floor(diff/(24*60*60));
    var leftSec = diff - days * 24*60*60;
    
    var hrs = Math.floor(leftSec/(60*60));
    var leftSec = leftSec - hrs * 60*60;
      
    var min = Math.floor(leftSec/(60));
    var leftSec = leftSec - min * 60;
    
   
   
 
    if( days < 1){
    	if(hrs < 1 ){
    		if( min < 1){
    			document.getElementById(id).innerHTML = leftSec+" seconds a go ";
    			
    		}else{
    			
    	    	document.getElementById(id).innerHTML = min+"  minute  a go";
    		}
    		
    	}else{
    		document.getElementById(id).innerHTML = hrs+"  hours a go";
    	}
    	
    	  
     } else if (days >= 1){
    	
    	document.getElementById(id).innerHTML = days+"  days  a go";
    	
    }  
 
    
//setTimeout(showDiff,1000);
}



function none(){
	
	 document.getElementById("count").style.display="none";
	
	
}





