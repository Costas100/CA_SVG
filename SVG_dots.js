var svg = document.getElementById("vimage");
var clearButton = document.getElementById("clear");



var prevX = -1;
var prevY = -1;

var add_Circle = function(e){
    var x = e.offsetX;
    var y = e.offsetY;


    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx",x);
    c.setAttribute("cy",y);
    c.setAttribute("r","25");
    c.setAttribute("fill","blue");

    svg.appendChild(c);

    
    if (prevX != -1){

	var line = document.createElementNS("http://www.w3.org/2000/svg","line");
	line.setAttribute("x1", prevX);
	line.setAttribute("y1", prevY);
	line.setAttribute("x2", x);
	line.setAttribute("y2",y);
	line.setAttribute("stroke","black");
	line.setAttribute("stroke-width","2");
	svg.appendChild(line);
    };

    prevX = x;
    prevY = y;
}



svg.addEventListener("click",add_Circle);



var clear = function(){
    while(svg.firstChild){
	svg.removeChild(svg.firstChild);
    };
    prevX = -1;
    prevY = -1;
}

clearButton.addEventListener("click",clear);
