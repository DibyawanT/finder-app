var userData;

fetch("data.json")
.then(response=>{
    return response.json();
})
.then(jsondata => userData = jsondata)

userData.foreach(userData,function(index,value){

})
