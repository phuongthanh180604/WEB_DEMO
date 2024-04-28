var user = localStorage.getItem('flag');
var data = JSON.parse(user);
document.getElementById("name1").innerHTML = data.username;
var exit = document.getElementById("exit");
exit.onclick = function(){
	delete localStorage.flag;
};
var btn = document.getElementById("btn");
btn.onclick = function(){
	window.location.href="topic.html";
};

