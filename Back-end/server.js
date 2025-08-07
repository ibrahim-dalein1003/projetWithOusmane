const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const helmet = require("helmet");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

dotenv.config();

const app = express();
connectDB();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth.routes"));

app.listen(PORT, () => {
  console.log(`Le serveur est lancé sur le port http://localhost:${PORT}`);
});
