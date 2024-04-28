var signup = document.getElementById('signup');
signup.onclick= function() {
	event.preventDefault();
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	var password1 = document.getElementById('password1').value;

	var error_text = document.getElementById('error_text');
	var error_password = document.getElementById('error_password');
	var error_password1 = document.getElementById('error_password1');


	var user = {
		username: username,
		password: password,
	};
	var json = JSON.stringify(user);

	if(username=='' && password=='' && password1==''){
		error_text.innerHTML='Trường này không được để trống!';
		error_password.innerHTML='Trường này không được để trống!';
		error_password1.innerHTML='Trường này không được để trống!';
	}
	
	if(username=='' && password!='' && password1!=''){
		error_text.innerHTML='Trường này không được để trống!';
		error_password.innerHTML='';
		error_password1.innerHTML='';
	}

	if(username=='' && password=='' && password1!=''){
		error_text.innerHTML='Trường này không được để trống!';
		error_password.innerHTML='Trường này không được để trống!';
		error_password1.innerHTML='';
	}

	if(username=='' && password!='' && password1==''){
		error_text.innerHTML='Trường này không được để trống!';
		error_password.innerHTML='';
		error_password1.innerHTML='Trường này không được để trống!';
	}

	if(username!='' && password=='' && password1==''){
		error_text.innerHTML='';
		error_password.innerHTML='Trường này không được để trống!';
		error_password1.innerHTML='Trường này không được để trống!';
	}

	if(username!='' && password!='' && password1==''){
		error_text.innerHTML='';
		error_password.innerHTML='';
		error_password1.innerHTML='Trường này không được để trống!';
	}


	if(username!='' && password!='' && password1!=''){
		error_text.innerHTML='';
		error_password.innerHTML='';
		error_password1.innerHTML='';
		if(password==password1){
			if(localStorage.getItem(username)==null){
				localStorage.setItem(username,json);
				alert("Đăng kí thành công");
				return 0;
			}
			var user = localStorage.getItem(username);
			var user = JSON.parse(user);
			alert("Tài khoản đã tồn tại");
		}
		else{
			error_password1.innerHTML='Mật khẩu không khớp';
		}
	}
	
 	
 	
};