var canvas = document.querySelector("#MyCanvas");
var context = canvas.getContext("2d");

//water
context.beginPath();
context.rect(0,600,800,600);

var lGradient = context.createLinearGradient(0,0,800,0);
lGradient.addColorStop(0,"#0d264a");
lGradient.addColorStop(0.5,"#1a4f99");
lGradient.addColorStop(1,"#0069fc");


context.fillStyle=lGradient;
context.strokeStyle="#6699ff";
context.fill();
context.stroke();

//sail
context.beginPath();
context.moveTo(310,300);
context.lineTo(440,540);
context.lineTo(180,540);
context.lineTo(310,300);
context.fillStyle="#ff9933";
context.strokeStyle="#ff9933";
context.fill();
context.stroke();

//flag
context.beginPath();
context.moveTo(290,220);
context.lineTo(290,280);
context.lineTo(220,250);
context.closePath();
context.fillStyle="#ff9933";
context.strokeStyle="#ff9933";
context.fill();
context.stroke();

//bottom
context.beginPath();
context.rect(140,560,340,80);
context.fillStyle="#800000";
context.strokeStyle="#800000";
context.fill();
context.stroke();

//mast
context.beginPath();
context.rect(305,200,10,360);
context.fillStyle="#800000";
context.strokeStyle="#800000";
context.fill();
context.stroke();

//sun
context.beginPath();
context.arc(660,140,90,0,4*Math.PI,false);

var rGradient = context.createRadialGradient(660,140,20,660,140,90);
rGradient.addColorStop(0,"#ffa203");
rGradient.addColorStop(0.5,"#ffc003");
rGradient.addColorStop(1,"#ffd503");

context.fillStyle=rGradient;
context.strokeStyle="yellow";
context.fill();
context.stroke();
