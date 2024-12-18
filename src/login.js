import { Router } from "express";
import { conn } from "./mysql.js";

const log_router = Router()



// TABELA novo_cliente



log_router.post("/cliente", (req, res) => {
    const { nome, cpf, endereco } = req.body;

    conn.query(`insert into novo_cliente (nome, cpf, endereco) values ('${nome}', '${cpf}', '${endereco}')`, (err, result) => {
        if (err) {
            return req.json({
                Erro: "erro na conexão ao bd" + err.message
            })
        }
        res.json("cliente registrado")
    })
})

log_router.delete("/cliente", (req, res) => {
    const { id_cliente } = req.body

    conn.query(`delete from novo_cliente where id_cliente = '${id_cliente}'`, (err, result) => {
        if (err) {
            return res.json({
                Erro: "erro na conexão ao bd: " + err.message
            })
        }
        res.json({
            sucesso: "cliente deletado"
        })
    })
})

log_router.put("/cliente", (req, res) => {
    const { id, novonome, novocpf, novoendereco } = req.body;
    conn.query(`update novo_cliente set nome='${novonome}', cpf='${novocpf}', endereco='${novoendereco}'
        where id_cliente=${id}`, (err, result) => {
        if (err) {
            return res.json({
                Erro: "erro na conexão ao bd" + err.message
            })
        }
        res.json("cliente atuaizado")
    })
})

log_router.get("/cliente", (req, res) => {
    conn.query("select * from novo_cliente", (err, result) => {
        if (err) {
            return res.json(err.message)
        }
        res.json(result)
    })
})



// TABELA novas_reservas



log_router.post("/horario", (req, res) => {
    const { nome_cliente, data, hora } = req.body;
    conn.query(`insert into novas_reservas (nome_cliente, Dia_reservado, hora) values ('${nome_cliente}', '${data}', '${hora}')`, (err, result) => {
        if (err) {
            return res.json({
                Erro: "erro na conexão ao bd" + err.message
            })
        }
        res.json("horario reservado")
    })
})

log_router.delete("/horario", (req, res) => {
    const { id_hora } = req.body

    conn.query(`delete from novas_reservas where id_hora = '${id_hora}'`, (err, result) => {
        if (err) {
            return res.json({
                Erro: "erro na conexão ao bd: " + err.message
            })
        }
        res.json({
            sucesso: "horario cancelado"
        })
    })
})

log_router.put("/horario", (req, res) => {
    const { id, novonome, novodia, novahora } = req.body;
    conn.query(`update novas_reservas set nome_cliente='${novonome}', Dia_reservado='${novodia}', hora='${novahora}' where id_hora=${id}`, (err, result) => {
        if (err) {
            return res.json({
                Erro: "erro na conexão ao bd   " + err.message
            })
        }
        res.json("horario atuaizado")
    })
})

log_router.get("/horario", (req, res) => {
    conn.query("select * from novas_reservas", (err, result) => {
        if (err) {
            return res.json(err.message)
        }
        res.json(result)
    })
})

export { log_router }