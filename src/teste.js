const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

// Conectar ao banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',  // Senha do MySQL (padrão no XAMPP é uma string vazia)
  database: 'barbearia'
});

// Conectar ao banco de dados
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Middlewares
app.use(cors());
app.use(express.json());  // Para interpretar requisições com JSON

// Rota para obter todas as reservas
app.get('/reservas', (req, res) => {
  db.query('SELECT * FROM reservas', (err, results) => {
    if (err) {
      console.error('Erro ao buscar reservas:', err);
      return res.status(500).send('Erro no servidor');
    }
    res.json(results);
  });
});

// Rota para criar uma nova reserva
app.post('/reservas', (req, res) => {
  const { nome_cliente, telefone, data_reserva, serviço } = req.body;
  const query = 'INSERT INTO reservas (nome_cliente, telefone, data_reserva, serviço) VALUES (?, ?, ?, ?)';
  
  db.query(query, [nome_cliente, telefone, data_reserva, serviço], (err, results) => {
    if (err) {
      console.error('Erro ao criar reserva:', err);
      return res.status(500).send('Erro no servidor');
    }
    res.status(201).send('Reserva criada com sucesso');
  });
});

// Rota para atualizar uma reserva
app.put('/reservas/:id', (req, res) => {
  const { id } = req.params;
  const { nome_cliente, telefone, data_reserva, serviço } = req.body;
  const query = 'UPDATE reservas SET nome_cliente = ?, telefone = ?, data_reserva = ?, serviço = ? WHERE id = ?';

  db.query(query, [nome_cliente, telefone, data_reserva, serviço, id], (err, results) => {
    if (err) {
      console.error('Erro ao atualizar reserva:', err);
      return res.status(500).send('Erro no servidor');
    }
    res.send('Reserva atualizada com sucesso');
  });
});

// Rota para deletar uma reserva
app.delete('/reservas/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM reservas WHERE id = ?';

  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Erro ao deletar reserva:', err);
      return res.status(500).send('Erro no servidor');
    }
    res.send('Reserva deletada com sucesso');
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
