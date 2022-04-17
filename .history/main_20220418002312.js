var userData;
var index=1;
callAPI()
function callAPI(){
fetch("data.json")
.then(response=>{
    return response.json();
})
.then(jsondata => userData = jsondata.users)
};
if(userData == undefined){
    setTimeout(showData(index),3000);
}
else{

}


function showData(index){
    document.getElementById("uname").innerHTML = userData[index].uname;
    document.getElementById("skills").innerHTML= userData[index].skill;
    document.getElementById("top-class").innerHTML='<img class="top-img" src="'+userData[index].img_src+'">';
}
