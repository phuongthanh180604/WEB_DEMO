var u = localStorage.getItem('flag');
var d = JSON.parse(u);
document.getElementById("name1").innerHTML = d.username;
var exit = document.getElementById("exit");
exit.onclick = function(){
	delete localStorage.flag;
};
var btn = document.getElementById("btn");
var qs = document.getElementById('qs');
var correctAnswer= document.getElementById('correctAnswer');
var select = document.getElementById('select');
var stt = 0;
var listQscss = [];
localStorage.setItem("stt",stt);
select.addEventListener('change', function(e){
	var op = e.target.value;
	if(op=='Chọn đáp án'){
		qs.innerHTML = '<textarea placeholder="Nhập câu hỏi" style="width:100%;" id="nameqs"></textarea><br><br>';
		gtri.style.display = 'block';
		var btn = document.getElementById('btn');
		btn.style.display = 'block';
		var optionsDiv = document.getElementById("optionsDiv");
			optionsDiv.style.display = 'block';
			optionsDiv.innerHTML='';
		btn.onclick = function(){
			// hàm hiện thị số đáp án từ người nhập

			var gtri = parseInt(document.getElementById('gtri').value);
			var answers = [];
			for (var i = 1; i <= gtri; i++) {

				var answerInputText = document.createElement("input");
				answerInputText.type = "text";
				answerInputText.name = "answer" + i;
				answerInputText.placeholder = "Answer " + i;
				optionsDiv.appendChild(answerInputText);

				optionsDiv.appendChild(document.createElement("br"));
				optionsDiv.appendChild(document.createElement("br"));

			}
		}
		var correctAnswer = document.getElementById("correctAnswer");
		correctAnswer.innerHTML = '<textarea placeholder="Nhập đáp án đúng" style="width:100%;" id="correct"></textarea>';

		var submit = document.getElementById('submit');
		submit.onclick = function(){
			// Hàm gửi câu hỏi

			var nameqs = document.getElementById("nameqs").value;
			var correct= document.getElementById("correct").value;
			var answers = [];
			var gtri = parseInt(document.getElementById('gtri').value);
			for (var i = 1; i <= gtri; i++) {
				var answer = document.getElementsByName("answer" + i)[0].value;
				answers.push(answer);
			}
			alert("Thêm câu hỏi thành công");
			console.log(answers);
			var user = localStorage.getItem('flag');
			var data = JSON.parse(user);
			var comment = " ";
			var qsindex = {
				nameqs : nameqs,
				op : op,
				username : data.username,
				answers: answers,
				date : new Date().toLocaleString(),
				status: 'Chờ duyệt',
				correct: correct,
				comment: comment
				
			};
			console.log(qsindex);
			//lấy dữ liệu từ local
			let listQscss = JSON.parse(localStorage.getItem('listQscss')) || [];
			 //cập nhật dữ liệu
			listQscss.push(qsindex);
			//lưu dữ liệu mới vào local
			localStorage.setItem('listQscss', JSON.stringify(listQscss));

			// Cập nhật bảng
        	updateTable();
        	
		}
		
	}
	if(op=='op1'){
		qs.innerHTML = '<br><br><br>';
		var correctAnswer= document.getElementById('correctAnswer');
		correctAnswer.innerHTML = ' ';
		gtri.style.display = 'none';
		var optionsDiv = document.getElementById("optionsDiv");
		var btn = document.getElementById('btn');
		btn.style.display = 'none';
		optionsDiv.style.display = 'none';
	}

	if(op=='Điền đáp án'){
		gtri.style.display = 'none';
		var optionsDiv = document.getElementById("optionsDiv");
		var btn = document.getElementById('btn');
		btn.style.display = 'none';
		optionsDiv.style.display = 'none';
		optionsDiv.innerHTML = '';

		optionsDiv.style.display = 'block';

		qs.innerHTML = '<textarea placeholder="Nhập câu hỏi" style="width:100%;" id="nameqs"></textarea>';
		var correctAnswer = document.getElementById("correctAnswer");
		correctAnswer.innerHTML = '<textarea placeholder="Nhập đáp án đúng" style="width:100%;" id="correct"></textarea>';
		
		optionsDiv.appendChild(document.createElement("br"));
		optionsDiv.appendChild(document.createElement("br"));
		
		var submit = document.getElementById('submit');
		submit.onclick = function(){
			// Hàm gửi câu hỏi

			var nameqs = document.getElementById("nameqs").value;
			console.log(nameqs);
			var correct= document.getElementById("correct").value;
			console.log(correct);
			alert("Thêm câu hỏi thành công");
			var user = localStorage.getItem('flag');
			var data = JSON.parse(user);
			var comment = " ";
			var qsindex = {
				nameqs : nameqs,
				op : op,
				username : data.username,
				date : new Date().toLocaleString(),
				status: 'Chờ duyệt',
				correct: correct,
				comment: comment
			};
			//lấy dữ liệu từ local
			let listQscss = JSON.parse(localStorage.getItem('listQscss')) || [];
			 //cập nhật dữ liệu
			listQscss.push(qsindex);
			//lưu dữ liệu mới vào local
			localStorage.setItem('listQscss', JSON.stringify(listQscss));

			// Cập nhật bảng
        	updateTable();
		}
	}
})

// Hàm hiển thị câu hỏi đã gửi
function updateTable() {
	var table = document.getElementById('table');
table.innerHTML = '<tr style="background: purple; font-weight: bold; color: white;"><td>STT</td><td><p>Câu hỏi</p></td><td>Loại câu hỏi</td><td>Người thêm</td><td>Thời gian thêm</td><td>Trạng thái</td><td>Chỉnh sửa</td><td>Xóa</td><td>Xem chi tiết</td><td>Duyệt</td><td>#</td></tr>';

	//lấy dữ liệu từ local
	let listQscss = JSON.parse(localStorage.getItem('listQscss')) || [];

	for (let i = 0; i < listQscss.length; i++) {
            const qsindex = listQscss[i];
            const row = table.insertRow(-1);
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            const cell5 = row.insertCell(4);
            const cell6 = row.insertCell(5);
            const cell7 = row.insertCell(6);
            const cell8 = row.insertCell(7);
            const cell9 = row.insertCell(8);
            const cell10 = row.insertCell(9);
            const cell11 = row.insertCell(10);


            cell1.innerHTML = i + 1;
            cell2.innerHTML = qsindex.nameqs.slice(0,10);
            cell3.innerHTML = qsindex.op;
            cell4.innerHTML = qsindex.username;
            cell5.innerHTML = qsindex.date;
            cell6.innerHTML = qsindex.status;

            // Thêm nút Chỉnh sửa
            const editButton = document.createElement('button');
            editButton.innerHTML = 'Chỉnh sửa';
            editButton.onclick = function() { editQuestion(i); };
            cell7.appendChild(editButton);

            function editQuestion(index) {
   		 		var listQscss = JSON.parse(localStorage.getItem('listQscss')) || [];
   		 		if(listQscss[index].status=="Chờ duyệt"){
    			var qsnew = listQscss[index].answers;
    			var newText = prompt('Nhập câu hỏi mới:', qsindex.nameqs);
    			var newAnswers = [];
    			for (let i = 0; i < qsnew.length; i++) {
        			const answer = prompt(`Nhập đáp án mới ${i + 1}:`, qsindex.answers[i]);
        			newAnswers.push(answer);
    			}
    			var newcorrect = prompt('Nhập đáp án đúng mới:', qsindex.correct);
    			listQscss[index].correct = newcorrect;
    			listQscss[index].nameqs = newText;
    			listQscss[index].answers = newAnswers;

    			//câp nhật lại dữ liệu vào local;
    			localStorage.setItem('listQscss', JSON.stringify(listQscss));

    			updateTable();}
			}

            // Thêm nút Xóa
            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = 'Xóa';
            deleteButton.onclick = function() { deleteQuestion(i); };
            cell8.appendChild(deleteButton);

            function deleteQuestion(index) {
        		const listQscss = JSON.parse(localStorage.getItem('listQscss')) || [];
        		listQscss.splice(index, 1);
        		localStorage.setItem('listQscss', JSON.stringify(listQscss));
        		updateTable();
    		}

    		// Thêm nút xem chi tiết
    		const seeButton = document.createElement('button');
            seeButton.innerHTML = 'Xem chi tiết';
            seeButton.onclick = function() { seeQuestion(i); };
            cell9.appendChild(seeButton);

            // Thêm nút Duyệt, Không duyệt
            const appButton = document.createElement('button');
            appButton.innerHTML = 'Duyệt';
            appButton.onclick = function() { appQuestion(i); };
            cell10.appendChild(appButton);

            const noButton = document.createElement('button');
            noButton.innerHTML = 'Không duyệt';
            noButton.onclick = function(){ noQuestion(i); };
            cell10.appendChild(noButton);

            const com = document.createElement('input');
            cell11.appendChild(com);
            com.id = "cominput";
            com.change = function(e) {
            	com = e.target.value;
            	var listQscss = JSON.parse(localStorage.getItem('listQscss')) || [];
    			listQscss[index].comment = document.getElementById('cominput').value;
    			localStorage.setItem('listQscss', JSON.stringify(listQscss));
    			updateTable();
            }
            

            function appQuestion(index) {
            	var listQscss = JSON.parse(localStorage.getItem('listQscss')) || [];
    			listQscss[index].status = "Đã duyệt";
    			console.log(listQscss[index].status);
    			localStorage.setItem('listQscss', JSON.stringify(listQscss));
    			updateTable();
            }

            function noQuestion(index) {
            	var listQscss = JSON.parse(localStorage.getItem('listQscss')) || [];
    			listQscss[index].status = "Không duyệt";
    			localStorage.setItem('listQscss', JSON.stringify(listQscss));
    			updateTable();
            }
            
        }
}
// hàm xem chi tiết
function seeQuestion(index) {
    var chitiet = document.getElementById('chitiet');
    var cauhoi = document.getElementById('cauhoi');
    var dapan = document.getElementById('dapan');
    var dapandung = document.getElementById('dapandung');
    chitiet.style.display = 'block';
    var listQscss = JSON.parse(localStorage.getItem('listQscss')) || [];
    var op = listQscss[index].op;
    if(op == 'Chọn đáp án'){
        var listQscss = JSON.parse(localStorage.getItem('listQscss')) || [];
        var seeqs = [];
        seeqs = listQscss[index].answers;
        cauhoi.innerHTML = ' ';
        dapandung.innerHTML = ' ';
        dapan.innerHTML = ' ';
        var them = ' ';
        cauhoi.innerHTML ='Câu hỏi: ' + listQscss[index].nameqs;
        for(i = 1; i <= seeqs.length; i++){
            them= them + '<div>' + i + ")      " + seeqs[i-1] + '</div>';
        }
        dapan.innerHTML = them;
        dapandung.innerHTML = 'Đáp án đúng: ' + listQscss[index].correct; 
    }
    else{
        dapan.innerHTML = ' ';
        dapandung.innerHTML = ' ';
        cauhoi.innerHTML = ' ';
        cauhoi.innerHTML ='Câu hỏi: ' + listQscss[index].nameqs;
        dapandung.innerHTML = 'Đáp án đúng: ' + listQscss[index].correct; 
    }
    var thoat = document.getElementById('thoat');
    thoat.onclick = function(){
        chitiet.style.display = 'none';
    }
}

updateTable();