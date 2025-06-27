require('dotenv').config();

// In-built module - 
const path = require("path");

// External Module
const express = require("express");
const cors = require("cors");


// Local Module
const AdminRouter = require("../Backend/routes/Admin");


const app = express();


app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cors())

app.use(express.urlencoded());
app.use("/admin",AdminRouter);



const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server is listening at port ${PORT}`)
})