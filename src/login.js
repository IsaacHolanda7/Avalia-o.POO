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

log_router.delete("/cliente", (req,res) => {
    const {id_clente} = req.body

    conn.query(`delete from novo_cliente where id_clente = '${id_clente}'`, (err,result) => {
        if(err){
            return res.json({
                Erro: "erro na conexão ao bd" + err.message   
            })
        }   
        result.json({
            sucesso: "texto"
        })
    })
})

// log_router.put("/cliente", (req,res) => {
//     const {novo_nome, novo_CPF, novo_Endereco, id_clente} = req.body

//     conn.query(`update partidas set novo_cliente nome = '${novo_nome}', CPF = '${novo_CPF}', Endereco ='${novo_Endereco}' where `)
// })

export {log_router}
