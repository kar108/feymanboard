const express = require("express")
// require("../feymanboard/backend/db/config")
// const User = require("../feymanboard/backend/db/config")
const app = express();

app.get("/register",(req,res)=>{
    res.send("api in progresss")
});

app .listen(5000)