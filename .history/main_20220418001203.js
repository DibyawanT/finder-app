var userData;
var index=11;
fetch("data.json")
.then(response=>{
    return response.json();
})
.then(jsondata => userData = jsondata.users)

setTimeout(showData,3000);

function showData(index){
const userSize = Object.keys().length;
    document.getElementById("uname").innerHTML =userData[index].uname;
    document.getElementById("skills").innerHTML=userData[index].skill;
    document.getElementById("top-class").innerHTML='<img class="top-img" src="'+userData[index].img_src+'">';
}
