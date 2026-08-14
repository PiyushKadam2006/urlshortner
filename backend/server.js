const dotenv = require("dotenv");
dotenv.config();
const app = require('./src/app');
const connectDB = require('./src/config/db');

connectDB();

app.listen(8080,()=>{
    console.log("server is running on port 8080");
})