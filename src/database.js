const dotenv=require("dotenv");
dotenv.config({ path: "./.env" });
const mongoose = require('mongoose');

const DB_URI = process.env.DB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB conectado exitosamente');
  } catch (err) {
    console.error('Error al conectar con MongoDB:', err.message);
    process.exit(1); 
  }
};

module.exports = connectDB;