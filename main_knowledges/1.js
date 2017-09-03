Main();

function Main(){
	//alert("dddd");
}

var i = document.getElementsByClassName('new')[0];
var nI = document.createElement('img');
nI.classList.add('newI');
			//nI.setAttribute('height', "10px");
			//nI.setAttribute('width', "10px");
			//nI.setAttribute('src', 'sources/snow.png');
			nI.src = 'sources/snow.png';
			//i.appendChild(nI);

window.onload = function canvSize(){
	var theCanvas = new Array();
	var n = 13;	
	for( var i = 0; i <= n; i++){
		theCanvas[i] = document.getElementsByClassName('canvas')[i];
		theCanvas[i].width = 200;
		theCanvas[i].height = 150;
	}
	if( theCanvas[0] && theCanvas[0].getContext){
		var ctx = theCanvas[0].getContext("2d");
		if(ctx){
			ctx.fillStyle = "#ddd";
			ctx.fillRect(0,0, ctx.canvas.width/2,ctx.canvas.height/2);
			ctx.lineWidth = 5;
			ctx.strokeStyle = "#999";
			ctx.strokeRect(0,0, ctx.canvas.width/2,ctx.canvas.height/2);

			ctx.clearRect(0,0, ctx.canvas.width/4,ctx.canvas.height/4);
		}
	}
	if( theCanvas[1] && theCanvas[1].getContext){
		var ctx = theCanvas[1].getContext("2d");
		if(ctx){
			for( var i = 0; i < 10; i++){
				ctx.beginPath();
				ctx.lineWidth = i+1;
				ctx.moveTo(ctx.canvas.width/2-i*10, 25+i*15);
				ctx.lineTo(ctx.canvas.width/2+i*10, 25+i*15);
				ctx.stroke();
			}
		}
	}
	if( theCanvas[2] && theCanvas[2].getContext){
		var ctx = theCanvas[2].getContext("2d");
		if(ctx){
			for( var i = 0; i < 10; i++){ 
				var degrees = 360;
				var radians = (Math.PI/180)*degrees;

				ctx.strokeStyle = "#5af36f";
				//ctx.fillStyle = "#8affff";
				ctx.lineWidth = i;

				ctx.beginPath();
				//ctx.lineWidth = i+1;
				ctx.arc(ctx.canvas.width-i*10, ctx.canvas.height-i*10, i*5, i*10, radians , false);
				//ctx.lineTo(ctx.canvas.width/2+i*10, 25+i*15);

				ctx.stroke();
			}
		}
	}
	if( theCanvas[3] && theCanvas[3].getContext){
		var ctx = theCanvas[3].getContext("2d");
		if(ctx){
			for( var i = 0; i < 3; i++){
				ctx.beginPath();
				ctx.strokeStyle = "#5af36f";
				ctx.lineWidth = i+1;
				ctx.moveTo(ctx.canvas.width/2-i*10, 25+i*15);
				ctx.bezierCurveTo(ctx.canvas.width/2-i*10, ctx.canvas.width/2-i*10, 25+i*15, 15*i, 50*i, 60*i );

				ctx.stroke();
			}
		}
	}
	if( theCanvas[4] && theCanvas[4].getContext){
		var ctx = theCanvas[4].getContext("2d");
		if(ctx){
			for( var i = 0; i < 5; i++){
				var theString = "Text in  a canvas";

				ctx.fillText(theString, i+20, i*15);

				ctx.font = "15pt Georgia";
				ctx.fillStyle = "#ef77ab";
				ctx.fillText(theString, i+20, i*15);

				ctx.strokeStyle = "rgba(125,200,230,0.8)";
				ctx.strokeText( theString, 20,120);
			}
		}
	}
	if( theCanvas[5] && theCanvas[5].getContext){
		var ctx = theCanvas[5].getContext("2d");
		if(ctx){
				var theImg = new Image();
				theImg.src = 'sources/img.jpg';
				//ctx.save();
//theImg.src = "sources/img.jpg";
				//theImg.onload = function(){
					
					ctx.fillStyle = ctx.createPattern(theImg, "repeat");
					ctx.fillRect(0, 0, 100, 100);
				//ctx.restore();
				//}	
				
		}
	}
	if( theCanvas[6] && theCanvas[6].getContext){
		var ctx = theCanvas[6].getContext("2d");
		if(ctx){
	/*		var linGrd = ctx.createLinearGradient(20, 20, 20, 100);
			linGrd.addColorStop(0, "#f00");
			linGrd.addColorStop(0.5, "#00f");
			linGrd.addColorStop(1, "#0f0");

			ctx.fillStyle = linGrd;
			ctx.fillRect(0,0, ctx.canvas.width/2,ctx.canvas.height-20);
			ctx.lineWidth = 3;
			ctx.StroceRect(0,0, ctx.canvas.width/2,ctx.canvas.height-20);
*/
			var radGrd = ctx.createRadialGradient(120, 120, 20, 150, 120, 100);
			radGrd.addColorStop(0, "#f00");
			radGrd.addColorStop(0.5, "#00f");
			radGrd.addColorStop(1, "#0f0");

			ctx.fillStyle = radGrd;
			ctx.beginPath();
			ctx.arc(ctx.canvas.width/1.5+10, ctx.canvas.height/2, 50,0, 2*Math.PI);
			ctx.stroke();
			ctx.fill();				
		}
	}
	if( theCanvas[7] && theCanvas[7].getContext){
		var ctx = theCanvas[7].getContext("2d");
		if(ctx){
			var srcImg = document.getElementsByClassName("nature_img")[0];
			

			ctx.arc(ctx.canvas.width/2, ctx.canvas.height/2, 75,0, 2*Math.PI);
			ctx.clip();

			ctx.drawImage(srcImg, 0, 0);
		}
	}
	if( theCanvas[8] && theCanvas[8].getContext){
		var ctx = theCanvas[8].getContext("2d");
		if(ctx){
			var srcImg = document.getElementsByClassName("nature_img")[0];
			srcImg.height = '10px';
			//setAttribute('height', "10px");
			srcImg.setAttribute('width', "10px");
			//ctx.drawImage(srcImg, 50, 50, 110, 100);
			ctx.drawImage(srcImg, 0, 0, 80, 80, 50, 50, 100, 100);
		}
	}
	if( theCanvas[9] && theCanvas[9].getContext){
		var ctx = theCanvas[9].getContext("2d");
		if(ctx){
			var srcImg = document.getElementsByClassName("nature_img")[0];
			//ctx.drawImage(srcImg, 50, 50, 110, 100);
			ctx.drawImage(srcImg, 0, 0, 80, 80, 50, 50, 100, 100);

			ctx.translate(50,50);
			ctx.drawImage(srcImg, 0, 0, 80, 80, 50, 50, 100, 100);

		}
	}
	if( theCanvas[10] && theCanvas[10].getContext){
		var ctx = theCanvas[10].getContext("2d");
		if(ctx){
			ctx.fillStyle = "#ddd";
			ctx.fillRect(0,0, 30,20);
			ctx.scale(2, 2);
			ctx.fillRect(40,20, 30,20);
		}
	}
	if( theCanvas[11] && theCanvas[11].getContext){
		var ctx = theCanvas[11].getContext("2d");
		if(ctx){
			var srcImg = document.getElementsByClassName("nature_img")[0];
			ctx.drawImage(srcImg, 0, 0, ctx.canvas.width, ctx.canvas.height);

			var curRow = 0, maxRow = ctx.canvas.height;
			
			var imgData = ctx.getImageData(0,0, ctx.canvas.width, ctx.canvas.height);
			alert(maxRow);
			var pixels = imgData.data;
			//ctx.drawImage(srcImg, 0, 0, 80, 80, 50, 50, 100, 100);

			while( curRow < maxRow){
				for( var i = 0; i < 5; i++){
					var thisRowBytes = (curRow + i) * ctx.canvas.width*4;
					for( var j = 0; j < ctx.canvas.width*4; j += 4){
						pixels[thisRowBytes + j] = 255 - pixels[thisRowBytes + j];
						pixels[thisRowBytes + j + 1] = 255 - pixels[thisRowBytes + j + 1];
						pixels[thisRowBytes + j + 2] = 255 - pixels[thisRowBytes + j + 2];
						//pixels[thisRowBytes + j + 3] = 1.0 - pixels[thisRowBytes + j + 3];

						alert("dd");
					}
				}
				curRow += 15;
			} 
			ctx.putImageData(imgData, 0, 0);
		}
	}
}