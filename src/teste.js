// Função para capturar o formulário e exibir a confirmação
document.getElementById('formReserva').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Captura os dados
    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;

    // Exibe a confirmação
    const confirmacao = document.getElementById('confirmacao');
    confirmacao.classList.remove('hidden');
    confirmacao.innerHTML = <p>Reserva confirmada para <strong>${nome}</strong> no dia <strong>${data}</strong> às <strong>${hora}</strong>. Esperamos você para o corte!</p>;
    
    // Limpa o formulário
    document.getElementById('formReserva').reset();
});