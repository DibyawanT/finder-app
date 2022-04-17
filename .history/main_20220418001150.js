var userData;
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
    document.getElementById("top-class").innerHTML='<img class="top-img" src="'+userData[1].img_src+'">';
}
