var userData;

fetch("data.json")
.then(response=>{
    return response.json();
})
.then(jsondata => userData = jsondata.users)

setTimeout(showData,2000);

function showData(){
const userSize = Object.keys(userData).length;
document.getElementById("uname").innerHTML=`${userData[1].uname}`;
document.getElementsByClassName("top-img").src=userData[1].s
// for(var index = 1; index <= userSize;){
//     document.getElementById("uname").innerHTML=`${userData[index].uname}`;
//     //console.log(userData[index].uname);
//     //console.log(userData[index].skill);    
    
//     }
};
