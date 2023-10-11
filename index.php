<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/style.css">
    <script src="/main.js"></script>
    <title>Calculadora de IMC</title>
</head>
<body>
    <div class="container">
        <h1>Calculadora de IMC</h1>
        <form id="imcForm">
            <label for="peso">Informe seu peso (kg):</label>
            <input type="number" id="peso" required>
            
            <label for="altura">Informe sua altura (m):</label>
            <input type="number" id="altura" step="0.01" required>
            
            <button type="button" id="calcularButton">Calcular</button>
        </form>
        
        <div id="resultado" class="hidden">
            <h2>Resultado</h2>
            <p>Seu IMC é: <span id="imcResult"></span></p>
            <p>Classificação: <span id="classificacao"></span></p>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
