/*window.onload = function canvSize(){
	var theCanvas = document.getElementsByClassName('canvas')[0];
	theCanvas.width = 200;
	theCanvas.height = 150;
	var ctx = theCanvas.getContext("2d");

		if(ctx){
			var srcImg = document.getElementsByClassName("nature_img")[0];
			srcImg.height = '10px';
			//setAttribute('height', "10px");
			srcImg.setAttribute('width', "10px");
			//ctx.drawImage(srcImg, 50, 50, 110, 100);
			ctx.drawImage(srcImg, 0, 0, 100, 100, 50, 50, 100, 100);
		}
}
*/
var canvas, ctx, bufferCanvas, bufferCtx,
	flakeArray = [], 
	flakeTimer = null,
	maxFlakes = 1500;

window.onload = function init(){
	canvas = document.getElementsByClassName('canvas')[0];
	ctx = canvas.getContext("2d");

	bufferCanvas = document.createElement("canvas");
	bufferCtx = bufferCanvas.getContext("2d");
	bufferCtx.canvas.width = ctx.canvas.width;
	bufferCtx.canvas.height = ctx.canvas.height;
	flakeTimer = setInterval(addFlake,50);

	Draw();

	setInterval(animate, 15);

}
function Flake(){
	this.x = Math.round(Math.random()*ctx.canvas.width);
	this.y = -10;	
	this.drift = Math.random();
	this.speed = Math.round(Math.random()*7)+1;
	this.width = (Math.random()*15) + 2;
	this.height = this.width;
	this.widths = (Math.random()*2) + 1;
	this.heights = this.widths;
}
function addFlake(){
	flakeArray[flakeArray.length] = new Flake();
	if( flakeArray.length >= maxFlakes){
		clearInterval(flakeTimer);
	}
}
function blank(){
	bufferCtx.save();
	var linGrd = ctx.createLinearGradient(20, 20, 500, 500);
			linGrd.addColorStop(0, "#613F71");
			linGrd.addColorStop(0.3, "#82ABB1");
			linGrd.addColorStop(0.4, "#436776");
			linGrd.addColorStop(0.7, "#502138");

			bufferCtx.fillStyle = linGrd;


	//bufferCtx.fillStyle ="#696882";// #82ABB1 "#330033";
	bufferCtx.fillRect(0, 0, bufferCtx.canvas.width, bufferCtx.canvas.height);
	bufferCtx.restore();

	bufferCtx.save();
	bufferCtx.shadowColor = "#502138";
	bufferCtx.shadowOffsetX = 30;
	bufferCtx.shadowOffsety = 10;
	bufferCtx.blur = 20;

	var srcImg = document.getElementsByClassName("nature_img")[8];
	bufferCtx.drawImage(srcImg, 0, 0, 4252, 2169, 0, 200, 500, 300 );
	/*var srcImg = document.getElementsByClassName("nature_img")[6];
	bufferCtx.drawImage(srcImg, 0, 0, 400, 229, 0, 300, 500, 500 );*/
	bufferCtx.restore();

	/*var srcImg = document.getElementsByClassName("nature_img")[7];
	bufferCtx.drawImage(srcImg, 0, 0, 936, 1280, 50, 260, 270, 250 );*/
}

function animate(){
	Update();
	Draw();
	
}

function Draw(){
	ctx.save();
	blank();

	var j = 0;
	for( var i = 0; i < flakeArray.length; i++){
		bufferCtx.fillStyle = "#555";
		bufferCtx.fillRect(flakeArray[i].x+100, flakeArray[i].y+20, flakeArray[i].widths, flakeArray[i].heights);

		var srcImg = document.getElementsByClassName("nature_img")[j++];
		bufferCtx.drawImage(srcImg, 0, 0, 100, 100, flakeArray[i].x, flakeArray[i].y, flakeArray[i].width, flakeArray[i].height);
			if( j > 5){
				j = 0;
			}
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

