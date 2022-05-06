import Router from "express";
import {methods as clientesController} from "./../controllers/clientes.controller";

const router = Router();

router.get("/",clientesController.getClientes);
router.post("/",clientesController.addClientes);
router.get("/:id", clientesController.getCliente);


export default router;