var user = localStorage.getItem('flag');
var data = JSON.parse(user);
document.getElementById("name1").innerHTML = data.username;
var exit = document.getElementById("exit");
exit.onclick = function(){
	delete localStorage.flag;
};
var html_btn = document.getElementById('html_btn');
html_btn.onclick = function(){
	if(data.username == "admin"){
		window.location.href="admin_html.html";
	}
	else{
		window.location.href="html_question.html";
	}
}

var css_btn = document.getElementById('css_btn');
css_btn.onclick = function(){
	if(data.username == "admin"){
		window.location.href="admin_css.html";
	}
	else{
		window.location.href="css_question.html";
	}
}

var js_btn = document.getElementById('js_btn');
js_btn.onclick = function(){
	if(data.username == "admin"){
		window.location.href="admin_js.html";
	}
	else{
		window.location.href="js_question.html";
	}
}
