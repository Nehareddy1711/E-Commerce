const port = 4000;
const express = require("express");
 const app = express();
 const mongoose = require("mongoose");
 const jwt = require("jsonwebtoken");
 const multer = require("multer");
 const path = require("path");
 const cors = require("cors");

 app.use(express.json());
 app.use(cors());

// Datbase Connection with MongoBD
mongoose.connect("mongodb+srv://nehareddy1711:Ammu@897@cluster0.26ybv0r.mongodb.net/FullStack")