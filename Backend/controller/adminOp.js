const Admin = require("../models/Admin");

exports.addPost = async (req, res, next) =>{
    try{
        const { title, content } = req.body;
        const image = req.file ? req.file.path : null;
        
        const newPost = new Admin({
            image,
            title,
            content
        });

        await newPost.save();
        res.status(201).json({
            message:"Post Successfully..",
            post: newPost
        })
    }catch(error){
        console.log("Add POST error: ", error);
        res.status(501).json({
            message:"Error creating post",
            error: error.message
        })
    }
}

exports.getData = async (req, res, next)=>{
    try{
        const getData = await Admin.find({});

        res.status(200).json({
            message:"Getting file successful",
            data: getData
        })
    }catch(error){
        res.status(501).json({
            message:"Error to fetch the data",
            error: error.message
        })
    }
}
