
var speed = 100;
var textPosition= 0;

function typewriter(){
    var arrayT = arr;
    console.log(arrayT)
    document.getElementById("type").innerHTML = 
    arrayT[0].substring(0,textPosition) + "<span>\u25ae</span>";

    if(textPosition++ != arguments[0].length){
        setTimeout(typewriter,speed);
    }
}

function nextpage(){
    document.location.href="main.html"
}
window.addEventListener('load',typewriter(["Find your perfect project buddy..."]));

//setTimeout(nextpage,6000)