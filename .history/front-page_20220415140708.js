var arrayT = ["Find your perfect project buddy..."];
var arrayTwo = ["find r"]
var speed = 100;
var textPosition= 0;

function typewriter(){
    document.getElementById("type").innerHTML = 
    arrayT[0].substring(0,textPosition) + "<span>\u25ae</span>";

    if(textPosition++ != arrayT[0].length){
        setTimeout(typewriter,speed);
    }
}
function typewriter2(){
    document.getElementById("finder").innerHTML = 
    arrayTwo[0].substring(0,textPosition) + "<span>\u25ae</span>";

    if(textPosition++ != arrayTwo[0].length){
        setTimeout(typewriter,speed);
    }
}

function nextpage(){
    document.location.href="main.html"
}
window.addEventListener('load',typewriter2);
//window.addEventListener('load',typewriter);

//setTimeout(nextpage,6000);