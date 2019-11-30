const express = require ("express");
//const bodyParser = require ('body-parser');
const cors = require ("cors")
const mongoose = require("mongoose")


require("dotenv").config();

const app = express();
const port = process.env.PORT || 500;
app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})

const connection = mongoose.connection;
connection.once("open", ()=>{
   console.log("mongoDB data connection has been established")
})
app.listen(port, ()=>{
    console.log(`port is running the server: ${port}`)
})