function calculateSavings() {
    const initialAmount = parseFloat(document.getElementById('initial-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100;
    const years = parseInt(document.getElementById('years').value);

    const finalAmount = initialAmount *  interestRate * years;
    document.getElementById('result').value = finalAmount.toFixed(2);
   
}   





function calculateInvestment() {
    const investmentAmount = parseFloat(document.getElementById('investment-amount').value);
    const stockPrice = parseFloat(document.getElementById('stock-price').value);
    const numberOfStocks = parseInt(document.getElementById('number-of-stocks').value);

    const totalInvested = stockPrice * numberOfStocks;
    const potentialReturn = investmentAmount - totalInvested;

    document.getElementById('total-invested').value = totalInvested.toFixed(2);
    document.getElementById('potential-return').value = potentialReturn.toFixed(2);
}





function calculateInvestmentreal() {
   
    const investmentAmount1 = parseFloat(document.getElementById('investment-amount1').value);
    const stockPrice1 = parseFloat(document.getElementById('stock-price1').value);
    const numberOfStocks1 = parseInt(document.getElementById('number-of-stocks1').value);
    const growthRate1 = parseFloat(document.getElementById('growth-rate1').value) / 100;
    const years1 = parseInt(document.getElementById('years1').value);

    // Calcula o total investido
    const totalInvested1 = stockPrice1 * numberOfStocks1;

    // Calcula o valor futuro das ações
    const futureStockPrice1 = stockPrice1 * Math.pow(1 + growthRate1, years1);
    const futureValue1 = futureStockPrice1 * numberOfStocks1;

    // Calcula o retorno potencial (lucro)
    const potentialReturn1 = futureValue1 - totalInvested1;

    // Exibe os resultados nos campos de saída
    document.getElementById('total-invested1').value = totalInvested1.toFixed(2);
    document.getElementById('potential-return1').value = potentialReturn1.toFixed(2);
}


function addFund() {
    // Obtém os valores dos campos de entrada
    const fundName = document.getElementById('fund-name').value;
    const pastPerformance = parseFloat(document.getElementById('past-performance').value);
    const managementFee = parseFloat(document.getElementById('management-fee').value);

    // Cria uma nova linha na tabela
    const table = document.getElementById('comparison-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Adiciona células com os dados inseridos
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3); // Célula para o botão de remoção

    cell1.textContent = fundName;
    cell2.textContent = pastPerformance.toFixed(2);
    cell3.textContent = managementFee.toFixed(2);
    cell4.innerHTML = '<button onclick="removeFund(this)">Remover</button>'; // Adiciona o botão de remoção

    // Limpa os campos de entrada para nova inserção
    document.getElementById('fund-form').reset();
}


function removeFund(button) {
    // Obtém a linha correspondente ao botão
    const row = button.parentNode.parentNode;
    // Remove a linha da tabela
    row.parentNode.removeChild(row);
}





async function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const cryptocurrency2 = document.getElementById('cryptocurrency2').value;

    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=eur`);
        const data = await response.json();

        const rate = data[cryptocurrency2].eur;
        const convertedAmount = amount / rate;

        document.getElementById('result2').innerHTML = `<p>${amount} euros equivalem a aproximadamente ${convertedAmount.toFixed(8)} ${cryptocurrency2.toUpperCase()}.</p>`;
    } catch (error) {
        console.error('Erro ao converter moeda:', error);
        document.getElementById('result2').innerHTML = '<p>Ocorreu um erro ao converter a moeda. Por favor, tente novamente mais tarde.</p>';
    }
}




function calculateInvestment2() {
    const initialAmount2 = parseFloat(document.getElementById('initial-amount2').value);
    const monthlyContribution2 = parseFloat(document.getElementById('monthly-contribution2').value);
    const interestRate2 = parseFloat(document.getElementById('interest-rate2').value) / 100;
    const interestFrequency2 = document.getElementById('interest-frequency2').value;
    const years2 = parseInt(document.getElementById('years2').value);

    let total2 = initialAmount2;
    let monthlyInterestRate2;
    let months2 = years2 * 12;

    if (interestFrequency2 === 'annual') {
        monthlyInterestRate2 = interestRate2 / 12;
    } else if (interestFrequency2 === 'monthly') {
        monthlyInterestRate2 = interestRate2;
    } else if (interestFrequency2 === 'quarterly') {
        monthlyInterestRate2 = interestRate2 / 4;
    }

    for (let i = 0; i < months2; i++) {
        total2 += monthlyContribution2;
        total2 *= (1 + monthlyInterestRate2);
    }

    const finalAmount2 = total2.toFixed(2);
    const totalContributions2 = (monthlyContribution2 * months2 + initialAmount2).toFixed(2);
    const interestEarned2 = (finalAmount2 - totalContributions2).toFixed(2);

    const resultHTML = `
        <p>Total de contribuições: ${totalContributions2} euros</p>
        <p>Juros ganhos: ${interestEarned2} euros</p>
        <p>Valor final do investimento: ${finalAmount2} euros</p>
    `;

    document.getElementById('result2').innerHTML = resultHTML;
}


