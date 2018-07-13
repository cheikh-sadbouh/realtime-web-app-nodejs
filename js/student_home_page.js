/**
 * 
 */






////










//add icon
function addicon(){
	


	/* $('#op').css('visibility', 'visible');
	 $('#ops').css('visibility', 'visible');*/
}


//create input dynamic 
var inc = 1;
function createinput(){


	if(inc==1){
	$("#walls").append(' <div id="cont" class="well" style="     min-height: 32px; max-height: 39px;overflow: auto;"></div>');
	}
	$("#cont").append('<input  required class="form-control input" name="ds'+inc+'" id="input" placeholder=" type option"  type="text">');

	
	inc= inc + 1;
	
}
//post
  function posts(){
    		 var postActions   = $( '#list_PostActions' );
    		    var currentAction = $( '#list_PostActions li.active' );
    		    if ( currentAction.length === 0 ) {
    		        postActions.find( 'li:first' ).addClass( 'active' );
    		    }
    		    postActions.find( 'li' ).on( 'click', function( e ) {
    		        e.preventDefault();
    		        var self = $( this );
    		        if ( self === currentAction ) {return;}
    		        // else
    		        currentAction.removeClass( 'active' );
    		        self.addClass( 'active' );
    		        currentAction = self;
    		    });
    		    
    		 }
    	 



//playlist


function playlist(X){
	
	
	//alert("trainig id is :"+X);
	 $target = $('#target');
	     //  preventDefault();
	       $target.load("/rim_learning_spring_mvc/playlist/"+X+" #palylist", function(){ 
	    	   
	    	   	$("#aa1").click(function() {
		       	   // alert("clicked:" + this.id);
		       	});

		       $("#aa1").trigger("click");  
	    	   
	       });
	       
	       

	    
	    		
			   
	    		  
	       	//alert("player-wrapper is here");
	       	
	    
	        
	 
	      
	       
	       
	       
	       
}






//submit form payment 

 




    
//validation payment form 







function FormValidation_payment(){
	var user_phone =document.getElementById('phone');
	
	if(user_phone.value ==''){
		user_phone.style.borderColor="rgba(234, 0, 0, 0.81)";
		//user_phone.style.boxShadow = "10px 20px 30px blue";
		user_phone.focus();
	         return false;
	}
	else{
		
	//	document.forms["payment"].submit();
	//	$('#response').modal('show');
		
		return true;
	}
}




////
 

$(document).on('click', '.panel-heading span.clickable', function (e) {
    var $this = $(this);
    if (!$this.hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideUp();
        $this.addClass('panel-collapsed');
        $this.find('i').removeClass('glyphicon-minus').addClass('glyphicon-plus');
    } else {
        $this.parents('.panel').find('.panel-body').slideDown();
        $this.removeClass('panel-collapsed');
        $this.find('i').removeClass('glyphicon-plus').addClass('glyphicon-minus');
    }
});
$(document).on('click', '.panel div.clickable', function (e) {
    var $this = $(this);
    if (!$this.hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideUp();
        $this.addClass('panel-collapsed');
        $this.find('i').removeClass('glyphicon-minus').addClass('glyphicon-plus');
    } else {
        $this.parents('.panel').find('.panel-body').slideDown();
        $this.removeClass('panel-collapsed');
        $this.find('i').removeClass('glyphicon-plus').addClass('glyphicon-minus');
    }
});
$(document).ready(function () {
    $('.panel-heading span.clickable').click();
    $('.panel div.clickable').click();
});






    

      

    	

    	  
    	  
    	  
function getSubList(X,formw) {
    		  $('#'+formw).submit(function(event) {
    		    event.preventDefault(); // Prevent the form from submitting via the browser
    		    var form = $(this);
    		    $.ajax({
    		      type: 'POST',
    		      url: '/rim_learning_spring_mvc/trainingrequest',
    		      data: form.serialize()
    		    }).done(function(data) {
    		      // Optionally alert the user of success here...
    		    	
    		    	$('#'+X).modal('hide')
    		    	$('#response').modal('show');
    		    }).fail(function(data) {
    		      // Optionally alert the user of an error here...
    		    	
    		    });
    		  });
    	  }


//post validation 
function postvalid(){
	b=true;
	
	var area =document.getElementById('area');
	
	if(area.value.trim()==""){
		//alert("is empty");
		area.style.borderColor="rgba(234, 0, 0, 0.81)";
		area.focus();
	         return false;
	}else if(inc !=1){
	alert("inc !=1");
		for( r=1; r<=inc;r++){
			alert("inside loop");
			var elm =$('[name="ds'+r+'"]');
			
			if(!$.trim(elm.value).length =="")
			{
				
				alert("i empty");
				
				
				
			       b=false;
			       
			         return false ;
			}
			
			
			
			
		}
		
		//alert("b :"+b+"area : "+area.value);
	}
	if(area.lenght != 0 && b!= false ){
		alert("call sndpost");
		sendpost();
		
		 return true ;
		
	}
	
	
}



function togglebtn(){
	
	if($('#paymentbtn').attr('value')=="Off"){
		
		$('#paymentbtn').val('On');
		
		$("#walls").append(' <div id="cont" class="well" style="     min-height: 32px; max-height: 39px;overflow: auto;"></div>');

$("#cont").append('<input  required class="form-control input" name="ds'+1+'" id="input" placeholder=" titre de conferance /visioconferance"  type="text"><div class="pull-left"><input id="ra1" class="radio-custom " name="radio-group" type="radio" ><label for="ra1" class="radio-custom-label">conference</label><input id="ra2" class="radio-custom " name="radio-group" type="radio" ><label for="ra2" class="radio-custom-label col-md-push-5">visioconference</label></div>');

	}else{
		$('#paymentbtn').val('Off');
		$("#cont").remove();
		
	}
		
	
	
}

function sendpost(){
	
	if(inc!=1){
		
		
		//alert("post vote ");
		   // var form = $(this);
		var DATA={};
		var area =document.getElementById('area');
		DATA["rt"]=area.value+"msgss";
		for( r=1; r<inc;r++){
			var elm =$('[name="ds'+r+'"]');
			DATA["rt"]=DATA["rt"]+elm.val()+"input" ;
			
		}
		alert("DATA"+DATA);
		
		
		   $.ajax({
			      type: 'POST',
			      url: '/rim_learning_spring_mvc/teacher_post/'+DATA["rt"]+'/'+localStorage.username,
			      data: DATA
			    }).done(function(data) {
			      // Optionally alert the user of success here...
			    	
			   // alert("data send  : "+data+"id :"+localStorage.username);
			    }).fail(function(data) {
			      // Optionally alert the user of an error here...
			    	// alert(" can't  send  data  : "+data+"id :"+localStorage.username);
			    });
		
		
		
		
		
		
		
		
		
		
	}//end post vote
	else if($('#paymentbtn').attr('value')!="Off"){
		alert("id a payment "+$('#input').val()+"date : "+$('#output').text());
		var dates=$('#output').text();
		//Tue May 02 2017 22:00:00 GMT+0000
		var d = dates.split(" ");
		alert("day :"+d[0]+"month : "+d[1]+"day: "+d[2]+"yesr :"+d[3]+"time :"+d[4]+"gg : "+d[5]);
		var tabmonth=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		var counter=1;
		var month=0;
		for( h=0;h<=tabmonth.length;h++){
			
			if(tabmonth[h]==d[1]){
				month=counter;
				
			}
			counter=counter+1;
			
			
		}
		//MM/dd/yyyy HH:mm:ss
		
		datefinal=month+"-"+d[2]+"-"+d[3]+"&"+d[4];
		var title=$('#input').val();
		var typepayment ;
		var btn1=document.getElementById('ra1');
		var btn2=document.getElementById('ra2');
		if(btn1.checked){
			typepayment="conference";
			alert(typepayment);
			
		}else if(btn2.checked){
			typepayment="visioconference";
			alert(typepayment);
		}
		
		
		//alert("final date ---> "+datefinal);
		
		
		var DATA={};
		var area =document.getElementById('area');
		DATA["rt"]=area.value+"msgss";
		var  py = $('#paymentbtn').attr('value');
		 //alert("btn :"+py);
		 DATA["rt"]=DATA["rt"]+title+"titleee"+datefinal+"datee"+typepayment+"typepaymnentee"+"paymentsss";
		 alert(DATA["rt"]+title+"title"+datefinal+"date"+typepayment+"typepaymnent"+"payment");
		 $.ajax({
		      type: 'POST',
		      url: '/rim_learning_spring_mvc/teacher_post/'+DATA["rt"]+'/'+localStorage.username,
		      data: DATA
		    }).done(function(data) {
		      // Optionally alert the user of success here...
		    	
		    //alert("data send  : "+data+"id :"+localStorage.username);
		    }).fail(function(data) {
		      // Optionally alert the user of an error here...
		    	// alert(" can't  send  data  : "+data+"id :"+localStorage.username);
		    });
		
		//end payment post
	}
	else{
		
		//alert("is simple post");
		
		var DATA={};
		var area =document.getElementById('area');
		DATA["rt"]=area.value+"msgss";
		
		 $.ajax({
		      type: 'POST',
		      url: '/rim_learning_spring_mvc/teacher_post/'+DATA["rt"]+'/'+localStorage.username,
		      data: DATA
		    }).done(function(data) {
		      // Optionally alert the user of success here...
		    	
		   // alert("data send  : "+data+"id :"+localStorage.username);
		    }).fail(function(data) {
		      // Optionally alert the user of an error here...
		    	// alert(" can't  send  data  : "+data+"id :"+localStorage.username);
		    });
		
		
		
		// end simple post
	}
	
	
	
	
}






//send  student  vote



function sendvote(idvote,idstd,votenumber){
	// var r="";
	alert("id : "+idvote+" idstd : "+idstd+"  votenumbre : "+votenumber);
	
	$.ajax({
	    type : "GET",
	    url : "/rim_learning_spring_mvc/studentvote/"+idvote+"/"+idstd,
	    dataType: 'TEXT',
	    data : {
	        
	    
	    },
	    success: function(data){
	        console.log(data);
	      //  r= data;
	      
	     //   alert("data is "+typeof(data));
	       // alert("r is  "+typeof(r));
	        
	        var s =  parseInt(data) ;
	      //  alert("s is : "+typeof(s));
	         if(s >= 2){
	         	var y=s-1;
	         	//alert("data-1 :"+y);
	         	$("a#"+votenumber).text("+"+y);
	         }else{
	         //	alert("data :"+s);
	         	$("a#"+votenumber).text(s);
	         }
	    }
	});	
	
   
    
}



// submit conference

function getSubpayment(X,formw) {
	  $('#'+formw).submit(function(event) {
	    event.preventDefault(); // Prevent the form from submitting via the browser
	    var form = $(this);
	    $.ajax({
	      type: 'POST',
	      url: '/rim_learning_spring_mvc/stdconferencetemporarystd',
	      data: form.serialize()
	    }).done(function(data) {
	      // Optionally alert the user of success here...
	    	
	    	$('#'+X).modal('hide')
	    	$('#response').modal('show');
	    }).fail(function(data) {
	      // Optionally alert the user of an error here...
	    	
	    });
	  });
}





/*upload img */

function uploadimg (){
    alert("is here ");
	 $(document).on('click', '#close-preview', function(){ 
		    $('.image-preview').popover('hide');
		    // Hover befor close the preview
		    $('.image-preview').hover(
		        function () {
		           $('.image-preview').popover('show');
		        }, 
		         function () {
		           $('.image-preview').popover('hide');
		        }
		    );    
		});

		$(function() {
		    // Create the close button
		    var closebtn = $('<button/>', {
		        type:"button",
		        text: 'x',
		        id: 'close-preview',
		        style: 'font-size: initial;',
		    });
		    closebtn.attr("class","close pull-right");
		    // Set the popover default content
		    $('.image-preview').popover({
		        trigger:'manual',
		        html:true,
		        title: "<strong>Preview</strong>"+$(closebtn)[0].outerHTML,
		        content: "There's no image",
		        placement:'bottom'
		    });
		    // Clear event
		    $('.image-preview-clear').click(function(){
		        $('.image-preview').attr("data-content","").popover('hide');
		        $('.image-preview-filename').val("");
		        $('.image-preview-clear').hide();
		        $('.image-preview-input input:file').val("");
		        $(".image-preview-input-title").text("Browse"); 
		    }); 
		    // Create the preview image
		    $(".image-preview-input input:file").change(function (){     
		        var img = $('<img/>', {
		            id: 'dynamic',
		            width:250,
		            height:200
		        });      
		        var file = this.files[0];
		        var reader = new FileReader();
		        // Set preview image into the popover data-content
		        reader.onload = function (e) {
		            $(".image-preview-input-title").text("Change");
		            $(".image-preview-clear").show();
		            $(".image-preview-filename").val(file.name);            
		            img.attr('src', e.target.result);
		            $(".image-preview").attr("data-content",$(img)[0].outerHTML).popover("show");
		        }        
		        reader.readAsDataURL(file);
		    });  
		});

}
   	 

/**check input while createing group*/
function FormValidation_creategroup(){
	alert("validation");
var namegroup =document.getElementById('namegroup');
var img = document.forms['myfrm']['input-file-preview'].files[0];
	if(namegroup.value.trim()==""  || img==null){
		alert("not empty");
		return false;
		
	}else
		{
		submit_to_controller();
		return true ;
		}
}

function submit_to_controller(){
	  $('#goupcreate').submit(function(event) {
		    event.preventDefault(); // Prevent the
		    
		    var idprof =document.getElementById('idprof').value;
	var img = document.forms['myfrm']['input-file-preview'].files[0];
	var namegroup =document.getElementById('namegroup').value;
	alert("group name "+namegroup+"  img :"+img.name);
	var formData = new FormData();
	 formData.append('input-file-preview', img);
	 formData.append('group', namegroup);
	 formData.append('profid', idprof);
	
	$.ajax({
	    url: "/rim_learning_spring_mvc/newgroup",
	    type: "POST",
	    contentType: false,
	    processData: false,
	    cache: false,
	    data: formData,
	    success: function(response) {
	    	 var x = document.getElementById('w1');
	    	
	    	 var x1 = document.getElementById('w0');
	    	
	      //  alert("response"+response);
	        
	       if(response=="1"){
	    	  alert(response);
	        $('#groupcr').modal('hide');
	       x.hidden = "";
	        $("#msggroup").text("group created !");
	    	$('#responsegroup').modal('show');
	    	$('#bodys').load();
	       }else{
	    	   alert(response);
	    	   $('#groupcr').modal('hide');
	    	 
	    	   x1.hidden ="";
		        $("#msggroup").text("group already exist  !");
		    	$('#responsegroup').modal('show');
		    	
	       }
	    	   
	       
	    },
	    error: function() {
	        alert("unable to create the record");
	    }
	});
	  });
	
	
}

function validationgrpsub(frm,mdl){
	alert("validation");
	var phonenumber =document.getElementById('phones');
	
		if(phonenumber.value.trim()==""){
			alert(" empty");
			return false;
			
		}else
			{
			 Subgrppayment(frm,mdl);
			return true ;
			}
	
	
}

function Subgrppayment(formw,X){
	
	 $('#'+formw).submit(function(event) {
		    event.preventDefault(); // Prevent the form from submitting via the browser
		    var form = $(this);
		    $.ajax({
		      type: 'POST',
		      url: '/rim_learning_spring_mvc/joingrouprequest',
		      data: form.serialize()
		    }).done(function(data) {
		      // Optionally alert the user of success here...
		    	
		    	$('#'+X).modal('hide')
		    	$('#responsegrprst').modal('show');
		    }).fail(function(data) {
		      // Optionally alert the user of an error here...
		    	
		    });
		  });
	
	
}


function validgrp_post(){
	
	var content =document.getElementById('content');
	
	if(content.value.trim()==""){
		alert(" empty");
		return false;
		
	}else 
		{
		
		alert(content.value);
		
		getSubpostgrp();
		return false ;
		}
	
}



function getSubpostgrp() {
	
		    // Prevent the form from submitting via the browser
		    
		    $.ajax({
		      type: 'POST',
		      url: '/rim_learning_spring_mvc/group_post_temp',
		      data:  $("#newpostgrp").serialize()
		    }).done(function(data) {
		      // Optionally alert the user of success here...
		    	var content =document.getElementById('content');
		    	content.value = '';
		    	alert("success");
		    }).fail(function(data) {
		      // Optionally alert the user of an error here...
		    	alert("error");
		    });
	 
}
		  
function postliked(x){
	
	alert("liked :"+x);
	
	 $.ajax({
	      type: 'POST',
	      url: '/rim_learning_spring_mvc/addpost/'+x,
	      data: x
	    }).done(function(data) {
	      // Optionally alert the user of success here...
	    	
	    	alert("success");
	    }).fail(function(data) {
	      // Optionally alert the user of an error here...
	    	alert("error");
	    });
	
	
}
