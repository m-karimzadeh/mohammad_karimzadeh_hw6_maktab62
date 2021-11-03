function updateDisplay(event){
    document.getElementById('mousePosition').innerHTML = "left: " + event.pageX + " top: " + event.pageY;
    document.getElementById('mousePointer').style.left = (event.pageX - 10) + 'px';
    document.getElementById('mousePointer').style.top = (event.pageY - 10) + 'px';
  
    document.getElementById('circlePosition').innerHTML =
        "left: " + document.getElementById('mousePointer').offsetLeft
        + " top: " + document.getElementById('mousePointer').offsetTop;

    
}
  
document.addEventListener("mousemove", updateDisplay);

// mouse position when move in blackBox
document.getElementById('blackBox').onmousemove = function(e){
    document.getElementById('boxPosition').innerHTML =
        "left: " + (e.pageX - this.offsetLeft)
        + " top: " + (e.pageY - this.offsetTop);
}


// mouse position when move in redBox
document.getElementById('redBox').onmousemove = function(e){
    document.getElementById('boxPosition').innerHTML =
        "left: " + (e.pageX - this.offsetLeft)
        + " top: " + (e.pageY - this.offsetTop);
}

// mouse in black box
document.getElementById('blackBox').onmouseenter = function(){
    document.getElementById('mousePointer').classList.add("bgRed");
    document.getElementById('boxPositionInfo').style.opacity = 1;
}
document.getElementById('blackBox').onmouseout = function(){
    document.getElementById('mousePointer').classList.remove("bgRed");
    document.getElementById('boxPositionInfo').style.opacity = 0;
}

// mouse in red box
document.getElementById('redBox').onmouseenter = function(){
    document.getElementById('mousePointer').classList.add("bgBlack");
    document.getElementById('boxPositionInfo').style.opacity = 1;
}
document.getElementById('redBox').onmouseout = function(){
    document.getElementById('mousePointer').classList.remove("bgBlack");
    document.getElementById('boxPositionInfo').style.opacity = 0;
}