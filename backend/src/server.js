const express = require("express") 
const AppError = require("./utils/AppError")
const connectDB = require("./database/index");
const createDefaultAdmin = require('./utils/createDefaultAdmin');
const router = require("./routes")

const cors = require("cors")
const app = express()


app.use(cors())
app.use(express.json());

connectDB().then(() => {
    createDefaultAdmin();
}).catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
})


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