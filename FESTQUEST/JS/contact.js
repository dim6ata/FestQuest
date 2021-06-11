document.getElementById("left-image").addEventListener("mouseover", yousefOn);
document.getElementById("left-image").addEventListener("mouseout", yousefOff);

document.getElementById("right-image").addEventListener("mouseover", selvinOn);
document.getElementById("right-image").addEventListener("mouseout", selvinOff);

function yousefOn(){
    
    document.getElementById("yousef").style.opacity = "1";
    
}


function yousefOff(){
    
    document.getElementById("yousef").style.opacity = "0";
    
}

function selvinOn(){
    
    document.getElementById("selvin").style.opacity = "1";
}

function selvinOff(){
    
    document.getElementById("selvin").style.opacity = "0";
}
