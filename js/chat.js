(function () { 

	


	vendorUrl= window.URL || window.webKitURL;
	navigator.getMedia =  navigator.getUserMedia ||
	                      navigator.webKitGetUserMedia||
	                      navigator.mozGetUserMedia ||
	                      navigator.msGetUserMedia;
	
	navigator.getMedia({
		video:false,
		audio:true
		},function (stream){
			
		 //  video.src = vendorUrl.createObjectURL(stream);
			//video.play();
			 
			
			//websocket.send(stream);
			
			
		},function (error){
			console.log(error);
			});

	
})();

