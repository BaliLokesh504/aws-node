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


app.listen(3000, ()=>{
    console.log("server started")
})