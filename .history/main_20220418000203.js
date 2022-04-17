var userData;
fetch("data.json")
.then(response=>{
    return response.json();
})
.then(jsondata => userData = jsondata.users)

setTimeout(showData,3000);

function showData(){
const userSize = Object.keys(userData).length;

for(var index = 1; index <= 1;index++){
    document.getElementById("uname").innerHTML =userData[index].uname;
    document.getElementById("skills").innerHTML=userData[index].skill;
    document.getElementById("top-class").innerHTML='<img class="top-img" src="'+userData[index].img_src+'">'
    }
    
};

