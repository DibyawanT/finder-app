var arrayT = ["Find your perfect project buddy..."];
var speed = 100;
var textPosition= 0;

function typewriter(){
    document.getElementById("type").innerHTML = 
    arrayT[0].substring(0,textPosition) + "<span>\u25ae</span>";

    if(textPosition++ != arrayT[0].length){
        setTimeout(typewriter,speed);
    }
}

function nextpage(){
    document.location.href="main."
}
window.addEventListener('load',typewriter);

setTimeout(nextpage,5000)