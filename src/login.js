import { Router } from "express";
import { conn } from "./mysql.js";

const log_router = Router()

log_router.post("/login", (req, res) => {
    const {NOVO_CLIENTE, endereco} = req.body;

    conn.query(`SELECT * FROM novo_cliente WHERE nome = '${NOVO_CLIENTE}' AND Endereco = '${endereco}'`, (err, result) => {
        if(err){
            return res.json({
                Erro: "erro na conexão ao bd" + err.message   
            })
        }   
        res.json(result)
    })
})
log_router.post("/cliente",(req,res)=>{
    const{nome, cpf, endereco} = req.body;

    conn.query(`insert into novo_cliente (nome, CPF, Endereco) values ('${nome}', ${cpf}, '${endereco}')`,(err, result)=>{
        if(err){
            return res.json({
                Erro: "erro na conexão ao bd" + err.message   
            })
        }   
        res.json("Cliente registrado")
    })
})
export {log_router}
// INSERT INTO `novo_cliente` (`Novo cliente`, `CPF`, `Endereço`) VALUES ('Gabriel', '1234567890', 'ri do pexe'), ('livis', '0987654321', 'mata fresca');