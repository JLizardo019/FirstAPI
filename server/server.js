//server-side code
// this is the code the server sends to your browser


// another core library 
// const path=require('path');

const fs = require("fs"); //opening fs Node module library?
const content = fs.readFileSync("db/plants.json");  //stands for synchronous

// make a webserver
const express=require("express"); 
const app = express();
app.use(express.static('public')); // creating a static server and serving public number
app.use(express.json());

let plants =JSON.parse(content); // parsing info as Json?
console.log(plants);

//endpoints

app.get("/plants",(req,res) =>{
    console.log("someone requested plants!");
    res.json(plants); // the response 
})

app.post("/plants", (req,res)=>
{   console.log(req.body);
    plants.push(req.body); // adding the new plant you want to 
    console.log("post new plant");
    res.json(plants); //updating original file
});

app.put("/plants/:name", (req,res)=>
{
    const itemToModify = req.params.name;
    console.log("modifying");
    console.log(req.body);
    plants.forEach(plant => {
        if (plant.plantId===itemToModify)
        {
            console.log("here");
            plant.req.body.attribute = req.body.value; // might need to stringify json
        }
    });
    res.json(plants);

});

app.delete("/plants/:name", (req, res) => {
    const itemToDelete = req.params.name;
    console.log("deleting");
    //console.log(plants);
    plants = plants.filter(plant => plant.plantId !== itemToDelete);
    res.json(plants);
  });

app.listen(3000, ()=> {
    console.log("listening on port localhost:3000");
}); // port number for server
