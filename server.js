const express= require("express")
const dotenv = require("dotenv")
const path= require("path")
dotenv.config()
const app = express()


app.use("/", express.static(path.join(__dirname, "public")));


const port= process.env.PORT
app.listen(port,()=>{
    console.log(`App is running on http://localhost:${port}`)
})
