const express = require ("express");
//const bodyParser = require ('body-parser');
const cors = require ("cors")
const mongoose = require("mongoose")


require("dotenv").config() ;

const app = express();
const port = process.env.PORT || 500;
app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://major:<password>@cluster0-el0eg.gcp.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true})

const connection = mongoose.connection;
connection.once("open", ()=>{
   console.log("mongoDB data connection has been established")
})

const exercisesRouters= require("./models/routes/exercise")
const usersRouters = require("./models/routes/users")

app.use('/exercise', exercisesRouters)
app.use("/users", usersRouters)
app.listen(port, ()=>{
    console.log(`port is running the server: ${port}`)
})