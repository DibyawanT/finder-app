var userData;

fetch("data.json")
.then(response=>{
    return response.json();
})
.then(jsondata => userData = jsondata.users)

setTimeout(showData,2000);

function showData(){
const userSize = Object.keys(userData).length;

?
};

