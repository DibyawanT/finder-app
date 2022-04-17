var userData;
fetch("data.json")
.then(response=>{
    return response.json();
})
.then(jsondata => userData = jsondata.users)

setTimeout(showData,3000);

function showData(var ){
const userSize = Object.keys(userData).length;
    document.getElementById("uname").innerHTML =userData[1].uname;
    document.getElementById("skills").innerHTML=userData[1].skill;
    document.getElementById("top-class").innerHTML='<img class="top-img" src="'+userData[1].img_src+'">';
}
