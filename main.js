document.addEventListener("DOMContentLoaded", function () {
    const imcForm = document.getElementById("imcForm");
    const pesoInput = document.getElementById("peso");
    const alturaInput = document.getElementById("altura");
    const calcularButton = document.getElementById("calcularButton");
    const resultadoDiv = document.getElementById("resultado");
    const imcResultSpan = document.getElementById("imcResult");
    const classificacaoSpan = document.getElementById("classificacao");

    calcularButton.addEventListener("click", function () {
        const peso = parseFloat(pesoInput.value);
        const altura = parseFloat(alturaInput.value);

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            alert("Por favor, insira valores válidos para peso e altura.");
            return;
        }

        const imc = peso / (altura * altura);
        imcResultSpan.textContent = imc.toFixed(2);

        let classificacao;
        if (imc < 18.5) {
            classificacao = "Magreza";
        } else if (imc < 24.9) {
            classificacao = "Normal";
        } else if (imc < 29.9) {
            classificacao = "Sobrepeso";
        } else if (imc < 39.9) {
            classificacao = "Obesidade";
        } else {
            classificacao = "Obesidade Grave";
        }

        classificacaoSpan.textContent = classificacao;
        resultadoDiv.style.display = "block";
    });
});
