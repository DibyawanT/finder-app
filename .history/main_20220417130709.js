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
document.getElementsByClassName("top-class").innerHTML="<img class="'top-img'"src="'${userData[1].img_src}">;
document.getElementById("skills").innerHTML=`${userData[1].skill}`
// for(var index = 1; index <= userSize;){
//     document.getElementById("uname").innerHTML=`${userData[index].uname}`;
//     //console.log(userData[index].uname);
//     //console.log(userData[index].skill);    
    
//     }
};

