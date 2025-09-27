const mongoose = require("mongoose");

const personasSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    mail:{
        type: String,
    },
    telefono:{
        type: Number,
    },
},
    {
       timestamps:true,
       versionKey:false
    }
);
module.exports = mongoose.model("Personas", personasSchema);
