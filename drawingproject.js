var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

canvas.fillStyle = "black";
canvas.fillRect(400,400, 200,400);

canvas.beginPath();
canvas.arc(380, 450, 40, 0, 2*Math.PI);
canvas.stroke();

canvas.beginPath();
canvas.arc(610, 450, 40, 0, 2*Math.PI);
canvas.stroke();

canvas.fillStyle = "black";
canvas.fillRect(330,450, 20,200);

canvas.fillStyle = "black";
canvas.fillRect(330,640, 60,20);

canvas.fillStyle = "black";
canvas.fillRect(640,450, 20,200);

canvas.fillStyle = "black";
canvas.fillRect(640,650, 60,20);


canvas.fillStyle = "black";
canvas.fillRect(500,250, 20,150);

canvas.fillStyle = "silver";
canvas.fillRect(460,200, 200,150);

canvas.fillStyle = "red";
canvas.fillRect(520,230, 20,20);

canvas.fillStyle = "red";
canvas.fillRect(600,230, 20,20);

canvas.fillStyle = "blue";
canvas.fillRect(500,300, 80,20);

canvas.beginPath();
canvas.moveTo(475,240);
canvas.lineTo(500,225);
canvas.lineTo(500,200);
canvas.fill();
