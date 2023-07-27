//Declara uma váriavel chamada mouseEvent e a inicializa com o valor "empty". Essa variável será usada para cotrolar o estado do mouse.

var mouseEvent = "empty";

//Declara duas variáveis chamadas em atribuir um valor inicial.

var last_position_of_x, last_position_of_y

//Obtém a referência para o elemento HTML com o ID "myCanvas" e armazena-o na variavél.

canvas = document.getElementById("myCanvas");

//Obtém o contexto 2D do canvas, que permite desenhas nele, e armazena-o na variável ctx. A partir de agora, podemos usar ctx para realizar de desenho no canvas.

ctx = canvas.getContext("2D")


function myTouchStart(e)
{
    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthOfLine;
    ctx.moveTo(lastPositionOfTouchX, lastPositionOfTouchY);
    ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY)
    ctx.stroke();

    lastPositionOfTouchX = currentPositionOfTouchX;
    lastPositionOfTouchY = currentPositionOfTouchY;

canvas.addEventListener("mousemove", myMouseMove);

function myMouseMove(e)
{
    correntPositionOfMouseX = e.clientX - canvas.offsetLeft;
    correntPositionOfMouseY = e.clientX - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthOfLine;
    ctx.moveTo(lastPositionOfTouchX, lastPositionOfTouchY);
    ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY)
    ctx.stroke();
    
    last_position_of_x = currentPositionOfX;
    last_position_of_y = currentPositionOfY;
    }

    last_position_of_x = currentPositionOfX;
    last_position_of_y = currentPositionOfY;
  
}