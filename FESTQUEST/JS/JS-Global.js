//Event Listeners for hovering effect over LOGO    
document.getElementById("image").addEventListener("mouseover", mouseOver);
document.getElementById("image").addEventListener("onfocus", mouseOver);
document.getElementById("image").addEventListener("mouseout", mouseOut);
document.getElementById("image").addEventListener("onblur", mouseOut);
document.getElementById("book-button").addEventListener("mouseover", mouseOver_2);
document.getElementById("book-button").addEventListener("mouseout", mouseOut_2);


//FUNCTIONS CHANGING BG COLOUR AND BORDER OF LOGO AT NAVBAR ON HOVER   
function mouseOver() {
  document.getElementById("image").style.border = "solid 2px #FFFC92"; 
  document.getElementById("image").style.backgroundColor = "#6000CE";
  document.getElementById("image").style.padding = "-1%"; 
}

function mouseOut() {
  document.getElementById("image").style.backgroundColor = "#FFFC92";
  document.getElementById("image").style.border = "solid 1px #6000CE";
  document.getElementById("image").style.padding = "0%";
  
}

//Functions Changing Button Hover
function mouseOver_2(){
  document.getElementById("book-button").style.backgroundColor =  "#FFFC92";
  document.getElementById("book-button").style.color = "#6000CE";
  document.getElementById("book-button").style.border = "solid 2px #6000CE";
}

function mouseOut_2() {
  document.getElementById("book-button").style.backgroundColor =  "#6000CE";
  document.getElementById("book-button").style.color = "#FFFC92";
  document.getElementById("book-button").style.border = "solid 2px #FFFC92";
}
     

//RESPONSIVE NAVBAR
function myNav(){
    var x = document.getElementById("mynavbar");
    if(x.className === "navbar"){
        x.className += " responsive";        
    }else{
        x.className = "navbar";
    }
}




