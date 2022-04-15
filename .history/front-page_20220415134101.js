
var speed = 100;
var textPosition= 0;

function typewriter(arr){
    var arrayT = arr;
    document.getElementById("type").innerHTML = 
    arrayT[0].substring(0,textPosition) + "<span>\u25ae</span>";

    if(textPosition++ != arrayT[0].length){
        setTimeout(typewriter,speed);
    }
}

function nextpage(){
    document.location.href="main.html"
}
window.addEventListener('load',typewriter(var arrayT = ["Find your perfect project buddy..."];));

setTimeout(nextpage,6000)