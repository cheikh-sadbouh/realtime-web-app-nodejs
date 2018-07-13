function FormValidation_login(){

	var user =document.getElementById('loginname');
	var pass  =document.getElementById('loginpass');
    
    
    
		
	
	if(user.value ==''){
		user.style.borderColor="rgba(234, 0, 0, 0.81)";
		user.focus();
	         return false;
	}if(pass.value ==''){
		pass.style.borderColor="rgba(234, 0, 0, 0.81)";
		pass.focus();
	         return false;
	}

}


function FormValidation_login_error(){

	var user =document.getElementById('erroruser');
	var pass  =document.getElementById('errorpass');
    
    
    
		
	
	if(user.value ==''){
		user.style.borderColor="#ec100c";
		user.focus();
	         return false;
	}
	
	if(pass.value ==''){
		pass.style.borderColor="#ec100c";
		pass.focus();
	         return false;
	}

}