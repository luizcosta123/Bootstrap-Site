async function loadBrazilStates() {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    const states = await response.json();

    const select = document.getElementById('brasil-estados-select');

    states.forEach(state => {
        const option = document.createElement('option');
        option.value = state.sigla;
        option.text = state.nome;
        select.appendChild(option);
    });
}

loadBrazilStates();