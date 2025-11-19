import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import path from "path"

dotenv.config()

const app = express();
const PORT = process.env.PORT || 4011
const __dirname = path.resolve()

app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

if ( process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")))

    app.get("*", (req, res) => {
       res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    })     
}

app.listen(PORT, () => {
    console.log("server is running on port: " + PORT)
})

