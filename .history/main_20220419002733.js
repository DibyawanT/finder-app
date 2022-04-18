var userData;
var index=1;
var x = window.matchMedia("(max-width:420px)");
var stored_name=[];
function callAPI(){
    return new Promise(function(resolve,reject){
       axios.get('data.json')
       .then(
           (response)=>{
               var result = response.data.users;
               console.log(result);
               resolve(result);
           },
           (error)=>{
               reject(error);
           }
       )
})
}

function showData(index){
    document.getElementById("uname").innerHTML = userData[index].uname;
    document.getElementById("skills").innerHTML= userData[index].skill;
    document.getElementById("top-class").innerHTML='<img class="top-img" src="'+userData[index].img_src+'">';
}
async function main(){
   userData = await callAPI();
    showData(index);
}
$("#btn-no").on('click',rejected);
$("#btn-yes").on('click',added);
$("#card").on('swipeleft',rejected);
$("#card").on('swipeleft',added);

function added(){
    stored_name.push(userData[index].uname);
    displayChat(index);
    index++;
    showData(index);
    localStorage.setItem('name',JSON.stringify(stored_name));
   
}

function rejected(){
    index ++;
    showData(index);
}

function displayChat(index){
    var 
    document.getElementById("topnav").innerHTML='<li><a id= "chat1"><div class="textoverflow fontsizemenu">'+userData[index].uname+'</div><p class="textSnip">type a message</p></a></li>';
}

main();