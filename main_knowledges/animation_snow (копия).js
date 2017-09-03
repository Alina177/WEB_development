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
	maxFlakes = 700;

window.onload = function init(){
	canvas = document.getElementsByClassName('canvas')[0];
	ctx = canvas.getContext("2d");

	bufferCanvas = document.createElement("canvas");
	bufferCtx = bufferCanvas.getContext("2d");
	bufferCtx.canvas.width = ctx.canvas.width;
	bufferCtx.canvas.height = ctx.canvas.height;
	flakeTimer = setInterval(addFlake,70);

	Draw();

	setInterval(animate, 20);

}
function Flake(){
	this.x = Math.round(Math.random()*ctx.canvas.width);
	this.y = -10;	
	this.drift = Math.random();
	this.speed = Math.round(Math.random()*5)+1;
	this.width = (Math.random()*35) + 2;
	this.height = this.width;
}
function addFlake(){
	flakeArray[flakeArray.length] = new Flake();
	if( flakeArray.length >= maxFlakes){
		clearInterval(flakeTimer);
	}
}
function blank(){
	bufferCtx.fillStyle ="#81809E";// "#330033";
	bufferCtx.fillRect(0, 0, bufferCtx.canvas.width, bufferCtx.canvas.height);
	var srcImg = document.getElementsByClassName("nature_img")[6];
	bufferCtx.drawImage(srcImg, 0, 0, 400, 229, 0, 300, 500, 500 );
	var srcImg = document.getElementsByClassName("nature_img")[7];
	bufferCtx.drawImage(srcImg, 0, 0, 936, 1280, 50, 260, 270, 250 );
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
	var srcImg = document.getElementsByClassName("nature_img")[j++];
	bufferCtx.drawImage(srcImg, 0, 0, 100, 100, flakeArray[i].x, flakeArray[i].y, flakeArray[i].width, flakeArray[i].height);
		if( j > 5){
			j = 0;
		}
	/*bufferCtx.fillStyle = "#fff";
	bufferCtx.fillRect(flakeArray[i].x, flakeArray[i].y, flakeArray[i].width, flakeArray[i].height);*/
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

