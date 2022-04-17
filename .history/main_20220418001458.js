var userData;
var index=1;
fetch("data.json")
.then(response=>{
    return response.json();
})
.then(jsondata => jsondata.users)

setTimeout(showData,3000);

function showData(index){
    document.getElementById("uname").innerHTML =userData[index].uname;
    document.getElementById("skills").innerHTML=userData[index].skill;
    document.getElementById("top-class").innerHTML='<img class="top-img" src="'+userData[index].img_src+'">';
}
