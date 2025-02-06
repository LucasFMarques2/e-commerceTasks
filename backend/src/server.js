const express = require("express") 
const cors = require("cors")
const app = express()
const AppError = require("./utils/AppError")
const connectDB = require("./database/index");
const router = require("./routes")

app.use(cors())
connectDB();
app.use(express.json());
app.use(router);

app.get("/", (req, res)=>{
    res.send("Servidor rodando")
})

app.use((error,req,res,next) =>{
    if(error instanceof AppError){
        return res.status(error.statusCode).json({
            status: "Error",
            message: error.message
        })
    }

    console.error(error);

    return res.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

const PORT = 3333;
app.listen(PORT,() => {
    console.log(`Servidor rodando na porta ${PORT}`)
})