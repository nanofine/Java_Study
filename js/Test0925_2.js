

var timeout = setTimeout(function() {
	alert("3초 지났다!");
}, 3000);

function stop(){
	clearTimeout(timeout);
}

var no = 1;

setInterval(a, 1000 , "Hi"); //1초 마다 실행


function a(abc)  {
	//console.log(abc);
	
	no++;
	var box = document.getElementById("box");
	box.innerHTML = no;
}

setInterval(function()  {
	var d = new Date();
	console.log(d.toString());
	
	var now = d.getFullYear() + "-" + (d.getMonth()+1) +"-"+d.getDate()+" "+d.getHours()+":"
	+d.getMinutes() + ":"+d.getSeconds();
	
	var t = document.getElementById("t");
	t.innerHTML = now;
	
}, 1000);
