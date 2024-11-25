import mysql from "mysql"

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"RESERVA"
});

conn.connect((err) => {
    if (err) {
        console.log("problema com BD: ", err);
        return;
    }
    console.log("conectado ao bd...")
});

export {conn}