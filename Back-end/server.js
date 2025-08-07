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
app.use(cors({
  origin : "https://projet-frontend-0c2l.onrender.com",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

app.use("/api/auth", require("./routes/auth.routes"));

app.listen(PORT, () => {
  console.log(`Le serveur est lancé sur le port http://localhost:${PORT}`);
});
