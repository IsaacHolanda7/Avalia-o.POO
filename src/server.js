import express from "express";
import {log_router} from "./login"

const app = express();

app.use(express.json());
app.use(log_router);

app.get('/usuarios', (req, res) => {
    app.send('ok, deu bom')
})

app.listen(3333)