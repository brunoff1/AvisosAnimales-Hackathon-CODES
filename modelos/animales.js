const mongoose = require("mongoose");

const animalesSchema = new mongoose.Schema({
    animal:{
        type: String,
        required: true
    },
    tamanio:{
        type: String,
        enum: ['Pequeño', 'Mediano', 'Grande']
    },
    color:{
        type: [String],
        default: []
    },
    genero:{
        type: String,
        enum: ['Macho', 'Hembra', 'Desconocido'],
    },
    ubicacion:{
        lat: {
            type: Number,
        },
        long: {
            type: Number,
        }
    },
    imagen:{
        type:String
    }
},
    {
       timestamps:true,
       versionKey:false
    }
);
module.exports = mongoose.model("Animales", animalesSchema, "Perdidos");
