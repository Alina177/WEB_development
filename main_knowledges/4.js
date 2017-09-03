var canvas, ctx, bufferCanvas, bufferCtx,
	flakeArray = [], 
	flakeTimer = null,
	maxFlakes = 400;

window.onload = function init(){
	canvas = document.getElementsByClassName('canvas')[0];
	ctx = canvas.getContext("2d");

	bufferCanvas = document.createElement("canvas");
	bufferCtx = bufferCanvas.getContext("2d");
	bufferCtx.canvas.width = ctx.canvas.width;
	bufferCtx.canvas.height = ctx.canvas.height;
	flakeTimer = setInterval(addFlake,100);

	Draw();

	setInterval(animate, 20);
}
function Flake(){
	this.x = Math.round(Math.random()*ctx.canvas.width);
	this.y = -10;	
	this.drift = Math.random();
	this.speed = Math.round(Math.random()*5)+1;
	this.width = (Math.random()*5) + 2;
	this.height = this.width;
}
function addFlake(){
	flakeArray[flakeArray.length] = new Flake();
	if( flakeArray.length >= maxFlakes){
		clearInterval(flakeTimer);
	}
}
function blank(){
	bufferCtx.fillStyle = "#330033";
	bufferCtx.fillRect(0, 0, bufferCtx.canvas.width, bufferCtx.canvas.height);
}

function animate(){
	Update();
	Draw();
}

function Draw(){
	ctx.save();
	blank();

	for( var i = 0; i < flakeArray.length; i++){
	bufferCtx.fillStyle = "#fff";
	bufferCtx.fillRect(flakeArray[i].x, flakeArray[i].y, flakeArray[i].width, flakeArray[i].height);
	}
	ctx.drawImage(bufferCanvas, 0, 0, bufferCanvas.width, bufferCanvas.height);
	ctx.restore();
}
function Update(){
	for( var i = 0; i < flakeArray.length; i++){
		if( flakeArray[i].y < ctx.canvas.height){
			flakeArray[i].y += flakeArray[i].speed;
			if( flakeArray[i].y > ctx.canvas.height){
				flakeArray[i].y = -5;
			}
			flakeArray[i].x += flakeArray[i].drift;
			if( flakeArray[i].x > ctx.canvas.width){
				flakeArray[i].x = 0;
			}
		}
	}
}