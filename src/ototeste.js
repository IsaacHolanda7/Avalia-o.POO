document.getElementById('form-reserva').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome_cliente = document.getElementById('nome_cliente').value;
    const telefone = document.getElementById('telefone').value;
    const data_reserva = document.getElementById('data_reserva').value;
    const serviço = document.getElementById('serviço').value;

    const reserva = {
        nome_cliente,
        telefone,
        data_reserva,
        serviço
    };

    // Enviar os dados para a API
    fetch('http://localhost:3000/reservas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reserva)
    }).then(response => response.text())
      .then(data => {
          alert('Reserva criada com sucesso');
          carregarReservas();  // Atualizar a lista de reservas
      }).catch(err => console.error('Erro ao criar reserva:', err));
});

function carregarReservas() {
    fetch('http://localhost:3000/reservas')
        .then(response => response.json())
        .then(reservas => {
            const lista = document.getElementById('reservas-lista');
            lista.innerHTML = '';
            reservas.forEach(reserva => {
                const li = document.createElement('li');
                li.textContent = `${reserva.nome_cliente} - ${reserva.serviço} - ${reserva.data_reserva}`;
                lista.appendChild(li);
            });
        }).catch(err => console.error('Erro ao carregar reservas:', err));
}

// Carregar reservas ao iniciar
carregarReservas();
