const express = require("express");
const app = express();
const dotenv = require("dotenv");
const port = process.env.port || 27015;
dotenv.config();
const connectDB = require('./src/database'); 
const bodyParser = require("body-parser");
const webRutas=require('./rutas/route');

connectDB();

app.use(express.urlencoded());
app.use(bodyParser.json());
app.use('/',webRutas);
app.use(express.json({extended: true}));
app.use(express.urlencoded());


app.use((req, res)=>{
    res.status(404).send("Pagina no encontrada");
})


app.listen(port,()=>{
    console.log("Servidor escuchando en http://localhost:" + port);
});




