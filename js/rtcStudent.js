/**
 * 
 */
var connection = new RTCMultiConnection();
var imguser = localStorage.im;
var name = localStorage.user;
function startv(idroom){
	
    connection.socketURL = 'http://localhost:9001/';
    connection.enableFileSharing = true; // by default, it is "false".
    connection.session = {
    	    audio: true,
    	    video: true,
    	    data : true
    	    
    	};
    connection.sdpConstraints.mandatory = {
    	    OfferToReceiveAudio: true,
    	    OfferToReceiveVideo: true
    	};
    	
    	
    	  
    	 
              
    	    	connection.join(idroom);
    	    	
    	        

           
            connection.onstream = function(event) {
                if (event.type === 'local' ) {
                	
                }

                if (event.type === 'remote') {
                	console.log("is remote");
                    if (event.stream.isVideo) {
                        if (event.stream.getAudioTracks().length && event.stream.getVideoTracks().length) {
                            // Audio+Video stream
                        	//remoteVideo.src = URL.createObjectURL(event.stream);
                        	console.log("is remote video ");
                        	document.getElementById('m').src = URL.createObjectURL(event.stream);
                        } 
                }
                    
                    if (event.stream.isScreen) {
                        // it is screen
                    	console.log("is remote screen ");
                    	document.getElementById('a').src = URL.createObjectURL(event.stream);
                    }
            }
            };
            
            
            //......................................................
            //................FileSharing/TextChat Code.............
            //......................................................
           
            document.getElementById('share-file').onclick = function() {
             var fileSelector = new FileSelector();
             fileSelector.selectSingleFile(function(file) {
            	 connection.send({
		    		    names: name,
		    		    img: imguser,
		    		    types:'file'
		    		 
		    		});
                 connection.send(file);
             });
            };
            document.getElementById('input-text-chat').onkeyup = function(e) {
             if(e.keyCode != 13) return;
             
             // removing trailing/leading whitespace
             this.value = this.value.replace(/^\s+|\s+$/g, '');
             if (!this.value.length) return;
            
	    		 connection.send({
		    		    names: name,
		    		    img: imguser,
		    		    msg: this.value,	
		    		    type:'msg'
		    		 
		    		});
            
             
             appendDIV(this.value);
             this.value =  '';
            };
            var chatContainer = document.querySelector('#chat-output');
	    	function appendDIV(event) {
	    		var data =event.data || event;
	    		
	    		
	    	 var div = document.createElement('div');
	    	 
	    	 div.innerHTML = "<li class='left clearfix'> <span class='chat-img pull-left'>" +
	    	 		"<img src='/rim_learning_spring_mvc"+imguser+"' alt='User Avatar'> </span>" 
	    	 +"	    		 <div class='chat-body clearfix'><div class='header'> <strong class='primary-font'>"+name+"</strong>"
+"  <small class='pull-right text-muted'><i class='fa fa-clock-o'></i> 12 mins ago</small>" +
		"</div><p> "+data+"</p></div></li>";
	    		  
	    	 chatContainer.insertBefore(div, chatContainer.firstChild);
            /*var chatContainer = document.querySelector('.chat-output');
            function appendDIV(event) {
             var div = document.createElement('div');
             div.innerHTML = event.data || event;
             chatContainer.insertBefore(div, chatContainer.firstChild);
             div.tabIndex = 0; div.focus();*/
             
            // document.getElementById('input-text-chat').focus();
            }   
            //connection.onmessage = appendDIV;
	    	var namef;
	    	var imgf;
            connection.onmessage = function(event) {
                var senderFullName = event.data.names;
                var img = event.data.img;
                var msg = event.data.msg;
                var types = event.data.type;
               
             
                
                 if(types=="msg"){
                	// alert("is msg");
                	   var div = document.createElement('div');
             	    	 
             	    	 div.innerHTML ="<li class='right clearfix'><span class='chat-img pull-right'> <img src='/rim_learning_spring_mvc"+img+"' alt='User Avatar'>"+ 
                             "</span><div class='chat-body clearfix'><div class='header'> <strong class='primary-font'>"+senderFullName+"</strong>"+
                              "<small class='pull-right text-muted'><i class='fa fa-clock-o'></i> 13 mins ago</small></div><p>" + 
                              msg+"</p></div></li>";
             	    		 chatContainer.insertBefore(div, chatContainer.firstChild);
                	 
                 }if(types=="user"){
                	 alert("new user"+senderFullName+"  "+img);
                	 var online = document.querySelector('#online-u');
    	    		 var div = document.createElement('div');
    	    		 div.innerHTML ="<li class='list-group-item'><div class='user'>"+
    	    	     "<div class='avatar'><img src='/rim_learning_spring_mvc"+img+"' alt='Username'>"+
    	    	        "<div class='status online'></div></div><div class='name'>"+senderFullName+"'</div><div class='mood'"+
    	    	        "</div></div></li>";
    	    		 online.insertBefore(div, online.firstChild);
                	 
                 }else{
                	// alert("is file");
                	 namef=event.data.names;
                	 imgf=event.data.img;
                	//alert(namef +"  "+imgf);
                	
             	    	//var d = document.getElementById('file-container');
                	// d.innerHTML = '<a href="' + msg.url + '" target="_blank" download="' + msg.name + '">' + msg.name + '</a>';
                	 
              	
                 }
              
            }
            connection.onFileEnd = function (file) {
            	// alert("file to std");
            		/*var d = document.getElementById('file');
             	 
                d.innerHTML = '<a  id="d" href="' + file.url + '" download="' + file.name + '">Download <strong style="color:green;">' + file.name + '</strong> </a>';
               */
            	 if(namef!= null && imgf!=null){
            	 var div = document.createElement('div');
    	    	 div.innerHTML ="<li class='right clearfix'><span class='chat-img pull-right'> <img src='/rim_learning_spring_mvc"+imgf+"' alt='User Avatar'>"+ 
                    "</span><div class='chat-body clearfix'><div class='header'> <strong class='primary-font'>"+namef+"</strong>"+
                     "<small class='pull-right text-muted'><i class='fa fa-clock-o'></i> 13 mins ago</small></div>" + 
                     +"</div></li>"+
    	    	 "<a  href='" + file.url + "' download='" + file.name + "'>Download <strong style='color:black;'>'" + file.name + "'</strong> </a>";
    	         chatContainer.insertBefore(div, chatContainer.firstChild);
    	    	/* var y = document.getElementById('copy');
                 y.innerHTML = '<a  id="d" href="' + file.url + '" download="' + file.name + '">Download <strong style="color:green;">' + file.name + '</strong> </a>';
           
    	    	*/
    	    
    	    	//("#file").clone().appendTo($("#copy"));
                 /*var dr =document.getElementById('file-container');
                 var r =document.getElementById('file');
                 connection.filesContainer = dr;
                 connection.filesContainer = r;*/
                 //dr.html($("#file").html());
               //  ("#file-container").clone().appendTo($("#file"));
    	         namef=null;
    	         imgf=null;
            	 }else{
            		 var div = document.createElement('div');
        	    	 div.innerHTML ="<li class='left clearfix'><span class='chat-img pull-left'> <img src='/rim_learning_spring_mvc"+imguser+"' alt='User Avatar'>"+ 
                        "</span><div class='chat-body clearfix'><div class='header'> <strong class='primary-font'>"+name+"</strong>"+
                         "<small class='pull-right text-muted'><i class='fa fa-clock-o'></i> 13 mins ago</small></div>" + 
                         +"</div></li>"+
        	    	 "<a  href='" + file.url + "' download='" + file.name + "'>Download <strong style='color:black;'>'" + file.name + "'</strong> </a>";
        	         chatContainer.insertBefore(div, chatContainer.firstChild);
            		 
            		 
            	 }
            };
           
           // ("#file-container").clone().appendTo($("#file"));
            
           

           


           // connection.filesContainer = document.getElementById('file-container');
            
        	

	
          
}
	
connection.onopen = function() {
	alert("open std"+imguser+"     "+name);
	/*var online = document.querySelector('#online-u');
	 var div = document.createElement('div');
	 div.innerHTML ="<li class='list-group-item'><div class='user'>"+
     "<div class='avatar'><img src='/rim_learning_spring_mvc"+imguser+"' alt='Username'>"+
        "<div class='status online'></div></div><div class='name'>'"+name+"'</div><div class='mood'"+
        "</div></div></li>";
	 online.insertBefore(div, online.firstChild);*/
	 
	 connection.send({
		    names: name,
		    img: imguser,
		    type:'user'
		 
		});
	
   
};	
           