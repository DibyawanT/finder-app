const { response } = require("express");

fetch("")
.then(response=>{
    return response.json();
})
.then(jsondata => console.log(jsondata));

