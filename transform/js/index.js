(function(){
	var wrap = document.getElementById('wrap');
	var next = document.querySelector('.next');
	var list = wrap.children;
	var timer = null;
	var nub = 0,
		n = 0,
		index = 0,
		w = 50,
		onOff = true,
		str = '';
	for(var i=0;i<14;i++){
		i<=7?index++:index--;
		str += `<div class="list" style="z-index:${index}">
					<div style="background-position:${-i*w}px"></div>
					<div></div>
					<div style="background-position:${-i*w}px"></div>
					<div></div>
					<div style="background-position:${-i*w}px"></div>
					<div style="background-position:${-i*w}px"></div>
				</div>`
	}
	wrap.innerHTML = str;
	next.addEventListener("click",fnClick);
	
	function fnClick(){
		if(onOff){
			onOff = false;
			clearInterval(timer);
			n++;
			timer = setInterval(function(){
				list[nub].style.transform = `rotateX(${n*90}deg)`;
				nub++;
				if(nub>list.length-1){
					clearInterval(timer);
					nub = 0;
					onOff = true;
				}
			},100)
		}
	}
})();