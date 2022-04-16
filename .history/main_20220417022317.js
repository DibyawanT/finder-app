const { response } = require("express");
document.onload(
fetch("data.json")
.then(response=>{
    return response.json();
})
.then(jsondata => console.log(jsondata))
);
