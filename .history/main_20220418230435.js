var userData;
var index=1;

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
$("#card").

function added(){
    index++;
    showData(index);
}

function rejected(){
    index ++;
    showData(index);
}
main();