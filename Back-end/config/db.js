const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("La connection à la base de donnees a reussi.");
  } catch (error) {
    console.error("Erreur de connection à la base de données");
    process.exit(1);
  }
};

module.exports = connectDB;
