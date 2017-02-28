var svg = document.getElementById("vimage");





var add_Circle = function(e){
    var x = e.offsetX;
    var y = e.offsetY;

    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx",x);
    c.setAttribute("cy",y);
    c.setAttribute("r","25");
    c.setAttribute("fill","yellow");
    
    
    svg.appendChild(c);
}



svg.addEventListener("click",add_Circle);
