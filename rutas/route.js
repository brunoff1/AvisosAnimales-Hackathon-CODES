const express = require("express");
const Animales = require("../modelos/animales");
const personasModelo = require("../modelos/personas");
const webRutas = express.Router();

webRutas.get("/", (req, res)=>{
    return res.json("Paginal inicial")
});

webRutas.get("/Animales", async (req, res) => {
    try {
        const animales = await Animales.find({});
        if (animales.length === 0) {
            return res.status(204).send({
                message: 'Lista vacia'
            });
        }
        else{
            const lineasTexto = animales.map(animal => 
                `ID: ${animal._id}, Especie: ${animal.animal}, Tamaño: ${animal.tamanio}, Color: ${animal.color}`
            );
            const textoPlano = lineasTexto.join('\n'); 
            res.status(200).send(textoPlano);
        }   
    } catch (error) {
        console.error(error); 
        res.status(500).send("Error del servidor");
    }
});




module.exports= webRutas;