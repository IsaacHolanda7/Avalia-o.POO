import { Router } from "express";
import { conn } from "./mysql.js";

const log_router = Router()

log_router.post("/login", (req, res) => {
    const {NOVO_CLIENTE, horario} = req.body;

    conn.query(`SELECT * FROM novo_cliente WHERE Novo_Cliente = '${NOVO_CLIENTE}' AND Dia_reservado = '${horario}'`, (err, result) => {
        if(err){
            return res.json({
                Erro: "erro na conexão ao bd" + err.message   
            })
        }
        res.json(result)
    })
})

export {log_router}
// INSERT INTO `novo_cliente` (`Novo cliente`, `CPF`, `Endereço`) VALUES ('Gabriel', '1234567890', 'ri do pexe'), ('livis', '0987654321', 'mata fresca');