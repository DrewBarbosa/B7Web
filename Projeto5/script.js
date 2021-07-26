// initial datas
let currentColor = 'black';
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

let screen = document.querySelector('#tela');
let context = screen.getContext('2d');


// events
document.querySelectorAll('.colorArea .color').forEach(item =>{
    item.addEventListener('click', colorClickEvent);
});
screen.addEventListener('mousedown', mouseDownEvt);
screen.addEventListener('mousemove', mouseMoveEvt);
screen.addEventListener('mouseup', mouseUpEvt);
document.querySelector('.clear').addEventListener('click', clearScreen);


// functions
function colorClickEvent(evt){
    let color = evt.target.getAttribute('data-color');
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');
    evt.target.classList.add('active');
}

function mouseDownEvt(evt){
    canDraw = true;
    mouseX = evt.pageX - screen.offsetLeft;
    mouseY = evt.pageY - screen.offsetTop;

}

function mouseUpEvt(){
    canDraw = false;
}

function mouseMoveEvt(evt){
    if(canDraw){
        draw(evt.pageX, evt.pageY)
    }
}

function draw(x, y){
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    context.beginPath();
    context.lineWidth = 5;
    context.lineJoin = "round";
    context.moveTo(mouseX, mouseY);
    context.lineTo(pointX, pointY);
    context.closePath();
    context.strokeStyle = currentColor;
    context.stroke();

    mouseX = pointX;
    mouseY = pointY;
}

function clearScreen(){
    context.setTransform(1,0,0,1,0,0);
    context.clearRect(0,0, context.canvas.width, context.canvas.height);
}