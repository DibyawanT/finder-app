const { response } = require("express");

fetch("./djson")
.then(response=>{
    return response.json();
})
.then(jsondata => console.log(jsondata));

