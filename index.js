const express = require("express")
const router = require("./routers/youtube.router")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 3001
app.use(cors())
app.use(express.json())
app.use("/api",router)
app.listen(port,()=>{
    console.log("server is running at port "+port)
})