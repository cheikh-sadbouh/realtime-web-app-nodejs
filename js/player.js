



function myFunc(R,Y){
  
	  document.getElementById(R).value=localStorage.username;
	  document.getElementById(Y).value=localStorage.pr;
}

function player(X,Y,Z,U){
	var player;

	 if (location.protocol === "file:") {
		    document.getElementById("webserver-warning").style.display = "block";
		  }
	
	
	 	  var conf = {
		    key:       "91941868-f5a0-4c8d-ad12-b270b60ce8dd",
		    source: {
		      dash:        X,
		      hls:         Y,
		      poster:      Z
		     
		    }
		  };
		   player = bitmovin.player(U);
		   if(player.isSetup()){
				
				player.destroy();
				 player = bitmovin.player(U);
				 player.setup(conf).then(function(value) {
					    // Success
					    console.log("Successfully created bitmovin player instance");
					 }, function(reason) {
					    // Error!
					    console.log("Error while creating bitmovin player instance");
					 });
			}else{
				
				
				 player.setup(conf).then(function(value) {
					    // Success
					    console.log("Successfully created bitmovin player instance");
					 }, function(reason) {
					    // Error!
					    console.log("Error while creating bitmovin player instance");
					 });
				
				
				
				
				
			}

	

}
function playerv2(X,Y,U,P){
	
	var player;


	 if (location.protocol === "file:") {
		    document.getElementById("webserver-warning").style.display = "block";
		  }
	// document.getElementById('Filler').id = 'Filler2';
	// document.getElementById("player-wrapper").innerHTML = "";


	jQuery('.pa').html('');
	// $( "<div>ggggggg</div>" ).appendTo( "#player-wrapper" );
	// var $e = $("<div>", {id: "newDiv1", name: 'test', class: "aClass"});
	
	 // add the element to the body
	 $(".pa").append("<div id="+U+"></div>");
//alert(U);
	// var element = document.createElement("div");
	//  element.setAttribute("id",U);
	 
	// document.getElementById('player-wrapper').appendChild(element);
	// $("#player-wrapper").append(element);
	
	 	  var conf = {
		    key:       "91941868-f5a0-4c8d-ad12-b270b60ce8dd",
		    source: {
		      dash:        X,
		      hls:         Y,
		      poster:      P
		     
		    }
		  };
		   player = bitmovin.player(U);
		  if(player.isSetup()){
				
				player.destroy();
				 player = bitmovin.player(U);
				 player.setup(conf).then(function(value) {
					    // Success
					    console.log("Successfully created bitmovin player instance");
					 }, function(reason) {
					    // Error!
					    console.log("Error while creating bitmovin player instance");
					 });
			}else{
				
				
				 player.setup(conf).then(function(value) {
					    // Success
					    console.log("Successfully created bitmovin player instance");
					 }, function(reason) {
					    // Error!
					    console.log("Error while creating bitmovin player instance");
					 });
				
				
				
				
				
			}
		  
		  }




 







 
 



