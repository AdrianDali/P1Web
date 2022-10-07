import express from "express";
import rutas from "./routes/index.js";
import db from "./config/db.js";

const app = express();

// Conectar a la base de datos
db.authenticate()
  .then(() => console.log("DB Conectada"))
  .catch((error) => console.log(error));

// Definir puerto
const port = process.env.PORT || 1800;

// definienfo pug para plantillas
app.set("view engine", "pug");

//middleware
app.use((req, res, next) => {
  const ano = new Date();
  res.locals.tiempo = " " + ano.getFullYear();
  return next();
});

//definiendo carpeta publica
app.use(express.static("public"));

//definiendo rutas
app.use("/", rutas);

app.listen(port, () => {
  console.log("Servidor iniciando en el puerto" + port);
});
