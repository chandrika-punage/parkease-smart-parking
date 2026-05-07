import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import formRouter from './routes/form.js'
import contactRouter from './routes/contact.js'


dotenv.config({"path":"./config/.env"})
const mongoDb_url = process.env.MONGODB_URL


const app=express()


app.get("/",(req,res)=>{
    return res.status(200).json({"msg":"Application Root Router"})
})

// Middlewares
app.use(cors());
app.use(express.json());

//Routes

app.use("/api/form",formRouter)
app.use("/api/contact",contactRouter)

mongoose.connect(mongoDb_url)
.then(()=>{
    console.log("MongoDb Connected Successfully")
})
.catch((error)=>{
    console.log("Connection Failed")

})


app.listen(8080,()=>{
    console.log("Server running on port 8080")
})