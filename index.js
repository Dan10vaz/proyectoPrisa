import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/index.js";
import guardiasRoutes from "./routes/guardiasRoutes.js";

const app = express();
app.use(express.json());
dotenv.config();
conectarDB();

app.use("/api/guardias", guardiasRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});
