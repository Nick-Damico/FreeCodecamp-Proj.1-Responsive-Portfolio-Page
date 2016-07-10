 var canvas, ctx,divcanvas;
 function init() {
     
    // This function is called after the page is loaded
    // 1 - Get the canvas
    canvas = document.getElementById('myCanvas');
    // 2 - Get the context
    ctx=canvas.getContext('2d');
    // 3 - we can draw
    drawSomething();
 }
    
function drawSomething() {
    ctx.font='normal 36px Monospace';
ctx.strokeText('Coming Soon...',50,150);
    ctx.fillText('Coming Soon',50,150);
}

function drawText() {

   
}