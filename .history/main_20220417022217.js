const { response } = require("express");
document.load
fetch("./data.json")
.then(response=>{
    return response.json();
})
.then(jsondata => console.log(jsondata));

