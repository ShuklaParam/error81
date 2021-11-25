canvas=document.getElementById("c");
ctx=canvas.getContext("2d");
color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(400,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",mymousedown);

function mymousedown(e){
   color=document.getElementById("i1").value;
   console.log(color);
 mousex=e.clientX-canvas.offsetLeft;
 mousey=e.clientY-canvas.offsetTop;
 console.log("x="+mousex+",y="+mousey);
 circle(mousex,mousey);
 
}

function circle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(400,200,40,0,2*Math.PI);
    ctx.stroke(); 
}
function cl(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}