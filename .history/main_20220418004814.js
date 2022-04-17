var userData;
var index=1;

function callAPI(){
    return new Promise(function(){})

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
async function main(){
    await callAPI();
}
main();