import express  from "express";
import morgan from "morgan";

//Rutas
import clientesRoutes  from "./routes/clientes.routes";

const app = express();

//Configuracion
app.set("port", 1200);

//Middlewares
app.use(morgan("dev"));

//Rutas
app.use("/api/clientes",clientesRoutes);


export default app



