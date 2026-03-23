function saibaMais() {
    alert("Bem-vindo à Setup Pro Digital! Estamos preparando algo incrível para você.");
}
function calcularImpacto() {
    // Pegando os valores dos inputs
    const horas = document.getElementById('horas').value;
    const valorHora = document.getElementById('valorHora').value;
    const divResultado = document.getElementById('resultado');

    // Validação simples
    if (horas === "" || valorHora === "") {
        alert("Por favor, preencha os campos para calcular.");
        return;
    }

    // Cálculos (22 dias úteis por mês)
    const custoMensal = horas * valorHora * 22;
    const custoAnual = custoMensal * 12;

    // Exibindo os resultados formatados
    document.getElementById('mensal').innerText = `R$ ${custoMensal.toLocaleString('pt-BR')}`;
    document.getElementById('anual').innerText = `R$ ${custoAnual.toLocaleString('pt-BR')}`;
    
    // Texto de impacto
    const feedback = document.getElementById('feedback');
    feedback.innerText = `Você está deixando de faturar ou perdendo o equivalente a ${custoAnual.toLocaleString('pt-BR')} por ano com processos que a Setup Pro Digital poderia automatizar.`;

    // Mostra a div de resultado
    divResultado.classList.remove('hidden');
}