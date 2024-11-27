import express from "express";
import {log_router} from "./login.js"

const app = express();
app.use(express.json());

app.use(express.json());
app.use(log_router);

app.post('/usuarios', (req, res) => {
    console.log(req)
    res.send('ok post')
})
app.get('/usuarios', (req, res) => {
    app.send('ok, deu bom')
})

app.listen(3333)