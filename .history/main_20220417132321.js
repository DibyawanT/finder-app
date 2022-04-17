var userData;

fetch("data.json")
.then(response=>{
    return response.json();
})
.then(jsondata => userData = jsondata.users)

setTimeout(showData,3000);

function showData(){
const userSize = Object.keys(userData).length;
document.getElementById("uname").innerHTML = `${userData[1].uname}`;
document.getElementById("skills").innerHTML=`${userData[1].skill}`;
document.getElementsByClassName("top-img").a ="https://picsum.photos/200/300";
// for(var index = 1; index <= userSize;){
//     document.getElementById("uname").innerHTML=`${userData[index].uname}`;
//     //console.log(userData[index].uname);
//     //console.log(userData[index].skill);    
    
//     }
};

