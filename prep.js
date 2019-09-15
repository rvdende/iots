var fs = require("fs");

fs.readFile("build/main.js", (err,data)=>{
    console.log(data.toString());
    var newdata = data.toString().replace("exports.__esModule = true;\n", "");
    //newdata = newdata.split("exports.__esModule = true;\n").join("");
    fs.writeFile("build/main.js", newdata,(err)=>{})
})