//window.onload = function(){
	var y = 200;
	var rectW = 40;
	var x = -rectW; 
	var canvas = null; 
	var ctx= null;

window.onload = function init(){
		canvas = document.getElementsByClassName("canvas")[0];
		ctx = canvas.getContext("2d");
		blank();


		ctx.fillStyle = "#fdd";
		ctx.fillRect(x, y, rectW, rectW);
		setInterval(anim, 30);

	}
	function blank(){
		ctx.fillStyle = "#ddf";
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	}
	function anim(){
		if( x < ctx.canvas.width){
			blank();
			x+=5;
			ctx.fillStyle = "#fdd";
			ctx.strokeStyle = "#f7f";
			ctx.lineWidth = 2;
			ctx.fillRect(x, y, rectW, rectW);
			ctx.strokeRect(x, y, rectW, rectW);
		}else{
			x = -rectW;
		}
	}

//}