require("dotenv").config();
import express from "express";
const app = express();
import cors from "cors";
require("./db/conn");

const PORT = 4000;



// middleware
app.use(express.json());
app.use(cors());



app.listen(PORT,()=>{
    console.log(`Server start at Port No :${PORT}`)
})