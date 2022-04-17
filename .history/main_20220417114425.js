var userData;

fetch("data.json")
.then(response=>{
    return response.json();
})
.then(jsondata => userData = jsondata)

setTimeout(userData.forEach(element => {
    console.log(element);
}),)
