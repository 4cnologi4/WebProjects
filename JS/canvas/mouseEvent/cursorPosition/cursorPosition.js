var circle;
var canvas = document.getElementById("cursor");
var context = canvas.getContext("2d");

function getMousePos(c, e){
  return {
    x: e.clientX,
    y: e.clientY
    }
}

canvas.addEventListener("mousemove", function(e){
  var mousePos = getMousePos(canvas, e);
  var msj = "mouse position x " + mousePos.x + " y " + mousePos.y;
  console.log(msj);
  //x,y, ancho, alto
  circle.clearRect(0,0, 1200, 1200);
  circle.beginPath();
  //x,y,radio,anguloInicio, anguloFin en radians, sentido antihorario si es true antihorario si es false
  circle.arc(mousePos.x, mousePos.y, 10, 0, Math.PI * 2, true);
  circle.fill();
});

(function(){
  circle = canvas.getContext('2d');
  circle.fillStyle = "rgba(163, 208, 244, 0.5)";
})();

//http://knowdimension.com/blog/lenguajes/javascript-detectando-las-coordenadas-del-mouse-en-javascript/