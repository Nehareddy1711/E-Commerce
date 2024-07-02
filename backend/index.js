import express from 'express';
import cors from 'cors';
import multer from 'multer';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import path from 'path';

const port = 4000;
const app = express();

app.use(express.json());
app.use(cors());

// Database Connection with MongoDB
const dbUri = "mongodb+srv://nehareddy1711:Ammu%40897@cluster0.akczrww.mongodb.net/mydatabase?retryWrites=true&w=majority";

mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// API Creation
app.get("/", (req, res) => {
    res.send("Express App is Running");
});

// Image Storage Engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage}) 

// Creating Upload Endpoint for images
app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

app.listen(port, (error) => {
    if (!error) {
        console.log("Server Running on Port " + port);
    } else {
        console.log("Error: " + error);
    }
});