function doFirst(){
  var x = document.getElementById('canvas');
  canvas = x.getContext('2d');/*global var */
/*  canvas.fillRect(10,10,100,200);/*strokeRect*/
/*  canvas.clearRect(20,20,50,90);
var g= canvas.createLinearGradient(0,0,100,100);
g.addColorStop(.0, "blue");
g.addColorStop(.5, "white");

g.addColorStop(1, "red");
canvas.fillStyle=g;
canvas.fillRect(0,0,100,100);

canvas.beginPath();
canvas.moveTo(50,50);
canvas.lineTo(70,250);
canvas.lineTo(300,200);
canvas.closePath();
canvas.stroke();*/
canvas.font= "bold 22px Tahoma";
canvas.textAlign= "start";
canvas.fillText("Start", 10, 30);
canvas.translate(100,150);
canvas.fillText("After Translation", 0,0);
canvas.rotate(1);
canvas.fillText("after rotation", 0,0);
canvas.scale(1.5, 2);
canvas.fillText("after scaling", 50,40);
}
window.addEventListener("load",doFirst, false);
