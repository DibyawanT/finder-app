var userData;

fetch("data.json")
.then(response=>{
    return response.json();
})
.then(jsondata => userData = jsondata)

userData.forEach(function(value,index){
    console.log(userData.user);
}    
});