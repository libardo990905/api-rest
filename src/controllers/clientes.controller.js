import {getConnection} from "./../database/database";


const getClientes = async (req, res)=>{
    try {
        const connection =  getConnection();
        const result = await connection.query('SELECT * FROM public.clientes');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const connection =  getConnection();
        const result = await connection.query("SELECT * FROM clientes WHERE id = "+id);
        res.json(result.rows);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


const addClientes = async (req, res)=>{
    try {
        const connection =  getConnection();
        res.json("addClientes");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    getClientes,
    addClientes,
    getCliente
}