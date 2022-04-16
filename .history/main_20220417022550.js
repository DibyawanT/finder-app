//  const { response } = require("express");
window.onload(
fetch("data.json")
.then(response=>{
    return response.json();
})
.then(jsondata => console.log(jsondata))
);
