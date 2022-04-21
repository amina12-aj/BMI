const express = require('express');
const bodyParser = require("body-parser")
const app = express();
app.use (bodyParser.urlencoded({extended:true}))

app.get("/bmicalculator", function(request,response)
{response.sendFile(__dirname + "/index.html")
});
app.post("/bmicalculator", function(request,response){
    var weight = Number(request.body.weight);
    var height = Number(request.body.height);
   BMI = weight/(height*height)
response.send("Your BMI is" + "" + "" + BMI);
})
app.listen(3000, function(){ 
console.log("server started on port 3000")})
 