import express from "express";

const app = express();

app.get('/usuarios', (req, res) => {
    app.send('ok, deu bom')
})

app.listen(3333)