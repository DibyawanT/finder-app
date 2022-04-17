var userData;

fetch("data.json")
.then(response=>{
    return response.json();
})
.then(jsondata => userData = jsondata)
.then
userData.forEach(element => {
    console.log(element);
});