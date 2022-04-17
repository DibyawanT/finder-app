var userData;
var index=1;
asyn() await callAPI()
function callAPI(){
fetch("data.json")
.then(response => response.json())
.then(jsondata => userData = jsondata.users)
.then(showData(index))

// if(userData == undefined){
//     setTimeout(showData(index),3000);
// }
// else{
//     showData(index);
// }
console.log(userData);

function showData(index){
    document.getElementById("uname").innerHTML = userData[index].uname;
    document.getElementById("skills").innerHTML= userData[index].skill;
    document.getElementById("top-class").innerHTML='<img class="top-img" src="'+userData[index].img_src+'">';
}
