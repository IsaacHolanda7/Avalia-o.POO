import { Router } from "express";
import { conn } from "./mysql";

const log = Router()

log_router.post("/login", (req, res) => {
    const {nome, horario} = req.body;

    conn.query(`SELECT * FROM tabela WHERE coluna.nome = '${nome}' AND coluna.senha = '${horario}'`, (err, result) => {
        if(err){
            return res.json({
                Erro: ";,.jbkouhb" + err.message
            })
        }
        res.json(result)
    })
})

export {log_router}