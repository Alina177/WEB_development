
var imagePath = [ 
						"sources/nature1.jpg",
						"sources/nature2.jpg",
						"sources/nature3.jpg",
						"sources/nature4.jpg",
						"sources/nature5.jpg"];
	var showCanvas = null;
	var showCanvasCtx = null;
	var img = document.createElement("img");
	var currentImage = 0;
	var revealTimer;
window.onload = function(){
	//for( var i = 0; i <= n; i++){
	showCanvas = document.getElementsByClassName('canvas')[0];
	//}alert("Fff")
	//if( theCanvas[0] && theCanvas[0].getContext){
	showCanvasCtx = showCanvas.getContext("2d");
	img.setAttribute('width', '700');
	img.setAttribute('height', '500');
	switchImage();
	setInterval(switchImage, 4000);
}
	function switchImage(){
		img.setAttribute('src', imagePath[currentImage++]);
		//img.onload = function(){
			if( currentImage >= imagePath.length){
				currentImage = 0;
			}
			showCanvasCtx.globalAlpha = 0.1;
			revealTimer = setInterval(revealImage,200);
		//}

	}
	function revealImage(){
		showCanvasCtx.save();
		showCanvasCtx.drawImage(img,0,0,700,500);
		showCanvasCtx.globalAlpha+= 0.1;
		if( showCanvasCtx.globalAlpha >= 1.0)
			clearInterval(revealTimer);
		console.log(showCanvasCtx.globalAlpha);
		showCanvasCtx.restore();
	//alert("e")

	}

