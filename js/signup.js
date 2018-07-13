/**
 * 
 */
/*signup tabs*/
jQuery(document).ready(function($) {
	tab = $('.tabs h3 a');

	tab.on('click', function(event) {
		event.preventDefault();
		tab.removeClass('active');
		$(this).addClass('active');

		tab_content = $(this).attr('href');
		$('div[id$="tab-content"]').removeClass('active');
		$(tab_content).addClass('active');
	});
});



/* for form validation*/
function FormValidation_student(){


var user_firstname =document.getElementById('user_firstname');
var user_lastname =document.getElementById('user_lastname');
var user_email =document.getElementById('user_email');
var user_name =document.getElementById('user_name');
var user_pass =document.getElementById('user_pass');
if(user_firstname.value ==''){
	user_firstname.style.borderColor="rgba(234, 0, 0, 0.81)";
	user_firstname.focus();
         return false;
}

if(user_lastname.value ==''){
	user_lastname.style.borderColor="rgba(234, 0, 0, 0.81)";
	user_lastname.focus();
         return false;
}
if(user_email.value ==''){
	user_email.style.borderColor="rgba(234, 0, 0, 0.81)";
	user_email.focus();
         return false;
}

if(user_name.value ==''){
	user_name.style.borderColor="rgba(234, 0, 0, 0.81)";
	user_name.focus();
         return false;
}
if(user_pass.value ==''){
	user_pass.style.borderColor="rgba(234, 0, 0, 0.81)";
	user_pass.focus();
         return false;
}


}
	//-----------------------------//



function FormValidation_teacher(){
	var user_firstname =document.getElementById('firstname');
	var user_lastname =document.getElementById('lastname');
	var user_email =document.getElementById('email');
	var user_tel  =document.getElementById('user_tel');
    var list  = document.getElementById('list');
    
    
		
	
	if(user_firstname.value ==''){
		user_firstname.style.borderColor="rgba(234, 0, 0, 0.81)";
		user_firstname.focus();
	         return false;
	}

	if(user_lastname.value ==''){
		user_lastname.style.borderColor="rgba(234, 0, 0, 0.81)";
		user_lastname.focus();
	         return false;
	}
	if(user_email.value ==''){
		user_email.style.borderColor="rgba(234, 0, 0, 0.81)";
		user_email.focus();
	         return false;
	}
	if(user_tel.value ==''){
		user_tel.style.borderColor="rgba(234, 0, 0, 0.81)";
		user_tel.focus();
	         return false;
	}
	if(list.value =='select'){
    	list.style.borderColor="rgba(234, 0, 0, 0.81)";
    	list.focus();
	         return false;
	}
	
	
	
}


//show model onload


$(document).ready(function () {

	$('#memberModal').modal('show');

});


$(document).ready(function () {

	$('#login_error').modal('show');

});


	
	

