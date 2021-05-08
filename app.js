var canvas = document.querySelector("#MyCanvas");
var context = canvas.getContext("2d");

context.beginPath();
context.font="32px sans-serif"
context.fillText("A sailor's joys are as simple as a child's.",10,40);
context.fill();

//water
var lGradient = context.createLinearGradient(0,0,800,0);
lGradient.addColorStop(0,"#0d264a");
lGradient.addColorStop(0.5,"#1a4f99");
lGradient.addColorStop(1,"#0069fc");

context.beginPath();
context.bezierCurveTo(0,540,700,700,800,580);
context.lineTo(800,800);
context.lineTo(0,800);
context.closePath();
context.fillStyle=lGradient;
context.strokeStyle="#6699ff";
context.fill();
context.stroke();

//curvy left sail
context.beginPath();
context.moveTo(290,290);
context.quadraticCurveTo(190,360,170,520);
context.quadraticCurveTo(210,500,290,520);
context.quadraticCurveTo(270,400,290,290);
context.fillStyle="white";
context.strokeStyle="white";
context.fill();
context.stroke();

// triangle right sail
context.beginPath();
context.moveTo(330,290);
context.lineTo(330,520);
context.lineTo(450,520);
context.closePath();
context.fillStyle="green";
context.strokeStyle="green";
context.fill();
context.stroke();

// sail text
context.beginPath();
context.font="700 40px Arial"
context.strokeText("USA",334,500);
context.strokeStyle="red";
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
context.fillStyle="#122499";
context.strokeStyle="#122499";
context.fill();
context.stroke();

//sun
var mouseX = 660;
var mouseY = 140;

function drawSun(){
context.beginPath();
context.arc(mouseX,mouseY,90,0,4*Math.PI,false);

var rGradient = context.createRadialGradient(mouseX,mouseY,20,mouseX,mouseY,90);
rGradient.addColorStop(0,"#ffa203");
rGradient.addColorStop(0.5,"#ffc003");
rGradient.addColorStop(1,"#ffd503");

context.fillStyle=rGradient;
context.strokeStyle="yellow";
context.fill();
context.stroke();
}

function getPosition(event){
    context.clearRect(mouseX-100,mouseY-100,200,200);
    mouseX=event.clientX-canvas.offsetLeft;
    mouseY=event.clientY-canvas.offsetTop;
    drawSun();
}

drawSun();

canvas.addEventListener("mousemove",getPosition,false);
//birds
//bird1
context.beginPath();
context.moveTo(100,100);
context.quadraticCurveTo(140,140,160,100);
context.quadraticCurveTo(180,140,220,100);
context.strokeStyle="black";
context.stroke();
//bird2
context.beginPath();
context.moveTo(160,160);
context.quadraticCurveTo(200,200,220,160);
context.quadraticCurveTo(240,200,280,160);
context.strokeStyle="brown";
context.stroke();

