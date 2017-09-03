data = [
	{name: "May", duration: 200, elevation: 160, environment: 180, difficulty: 250 }
	{name: "April", duration: 110, elevation: 30, environment: 50, difficulty: 200 }
	{name: "Year", duration: 300, elevation: 80, environment: 110, difficulty: 150 }
	{name: "5 Year", duration: 70, elevation: 120, environment: 150, difficulty: 110 }
	{name: "All time", duration: 160, elevation: 100, environment: 150, difficulty: 180 }
];

var dataChart, ctxData;

function drawChart(tour){
	drawBackground();
	drawLabels(tour);
	drawData(tout);
}

function drawBackground(){

	ctxData.save();

	ctxData.fillStyle = "#cafc2c";
	ctxData.fillRect(0,0,ctxData.canvas.width,  ctxData.canvas.height);

	ctxData.strokeStyle = "252525";
	ctxData.strokeRect(180, 100, 480, 260);

	ctxData.strokeStyle = "#ccc";
	for( var x = 180; x < 660; x += 20){
		ctxData.beginPath();
		ctxData.moveTo(x, 100);
		ctxData.lineTo(x, 360);
		ctxData.stroke();
	}
	ctxData.restore();
}

function drawLabels(tour){

}

function drawData(tour){
	
}