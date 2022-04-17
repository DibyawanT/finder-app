var userData;

fetch("data.json")
.then(response=>{
    return response.json();
})
.then(jsondata => userData = jsondata.users)

setTimeout(displayData,2000)
const userSize = Object.keys(userData).length;

for(var index = 1; index == userSize ; index++){
    console.log(userData)
}
