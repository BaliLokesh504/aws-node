const express = require("express")
const app = express()


app.get("/mi-ip-connect", (req,res)=>{

    try {

        console.log(req.headers)

        res.send({
            msg : "Heyyy how are u buddy"
        })
        
    } catch (error) {
        res.send({
            msg : "errror accessing ip"
        })
    }
})

app.get("/health", (req,res)=>{
    try {

        res.send({
            msg : "i am okay"
        })
        
    } catch (error) {
        res.send({
            msg: "not okay"
        })
    }
})


app.get("/", (req,res)=>{
    try {

        res.send({
            msg : "heyyy i am only from 4000"
        })
        
    } catch (error) {
        res.send({
            msg: "i am not able to proceed"
        })
    }
})

app.listen(3000, ()=>{
    console.log("server started")
})