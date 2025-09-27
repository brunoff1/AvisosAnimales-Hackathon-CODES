const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.port || 27015;
const connectDB = require('./src/database'); 
const webRutas=require('./rutas/route');

connectDB();

app.use(express.json());
app.use(express.urlencoded({extend:true}));

app.use('/api',webRutas);

app.use((req, res)=>{
    res.status(404).send("Pagina no encontrada");
})


app.listen(port,()=>{
    console.log("Servidor escuchando en http://localhost:" + port);
});




