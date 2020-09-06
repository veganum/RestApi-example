const express = require("express");
const app = express();
const morgan = require("morgan");

//--CONFIGURACIONES--
//Para asignar el puerto ( O corre el puerto 3000 o el que indique el servidor)
app.set("port", process.env.PORT || 3000);
//Para dar formato al Json
app.set("json spaces", 2);

//--MIDDLEWARES(Se ejecuta antes de que corra el servidor)--
//Para mensajes por consola
app.use(morgan("dev"));
//Para datos de inputs de formularios
app.use(express.urlencoded({ extended: false }));
//Para poder leer JSON
app.use(express.json());

// --RUTAS--
app.use(require("./routes/index"));
app.use("/api/movies", require("./routes/movies"));
app.use("/api/users", require("./routes/users"));

//--EMPEZANDO EL SERVIDOR--
app.listen(app.get("port"), () => {
  console.log(`Servidor en el puerto ${app.get("port")}`);
});
