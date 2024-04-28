function login1(){
	event.preventDefault();
	var login = document.getElementById('login');
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	var error_text = document.getElementById('error_text');
	var error_password = document.getElementById('error_password');

	var user = localStorage.getItem(username);
	var data = JSON.parse(user);

	if(username==''&&password==''){
		error_text.innerHTML='Trường này không được để trống!';
		error_password.innerHTML='Trường này không được để trống!';
	}
	if(username!=''&&password==''){
		error_text.innerHTML='';
		error_password.innerHTML='Trường này không được để trống!';
	}
	if(username==''&&password!=''){
		error_text.innerHTML='Trường này không được để trống!';
		error_password.innerHTML='';
	}


	if(username!=''&&password!=''){
		error_text.innerHTML='';
		error_password.innerHTML='';

		if(user == null){
			alert("Tài khoản chưa tồn tại. Vui lòng đăng kí tài khoản.");
		}
		else if(username==data.username && password==data.password){
			delete localStorage.flag;
			alert("Đăng nhập thành công");
			localStorage.flag = user;
			window.location.href="home.html";
		}
		else{
			alert("Đăng nhập thất bại");
		}
	}
}
