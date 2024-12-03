import express from "express";
import {log_router} from "./login.js"

const app = express();
app.use(express.json());

app.use(express.json());
app.use(log_router);

app.listen(3333)