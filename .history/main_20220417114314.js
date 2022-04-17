var userData;

fetch("data.json")
.then(response=>{
    return response.json();
})
.then(jsondata => userData = jsondata)
.th
userData.forEach(element => {
    console.log(element);
});