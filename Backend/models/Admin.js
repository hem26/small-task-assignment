require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MongoDBURL);

mongoose.connection.on("connected", ()=>{
    console.log("MongoDB connected successfully");
})

mongoose.connection.on("error", (err) => {
    console.log("MongoDB connection error:", err);
});

const adminSchema = mongoose.Schema({
    image:{
        type:String
    },
    title:{
        type:String,
        unique:true
    },
    content:{
        type:String
    }
})

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;


