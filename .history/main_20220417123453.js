var userData;

fetch("data.json")
.then(response=>{
    return response.json();
})
.then(jsondata => userData = jsondata.users)

set

function showData(){
const userSize = Object.keys(userData).length;

for(var index = 1; index == userSize ; index++){
    console.log(userData)
    }
};

