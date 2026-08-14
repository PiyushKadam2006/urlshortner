const express = require("express");
const cors =require('cors');


const app = express();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(express.json());

const urlRoutes = require("./routes/urlRoutes");

app.use("/api/url",urlRoutes);
app.use("/",urlRoutes)


module.exports=app