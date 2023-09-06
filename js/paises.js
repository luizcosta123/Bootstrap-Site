async function carregarPaises() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    
    const sortedCountries = data.sort((a, b) => {
        const countryA = a.name.common.toLowerCase();
        const countryB = b.name.common.toLowerCase();
        return countryA.localeCompare(countryB);
    });

    const select = document.getElementById('paises-select');

    data.forEach(country => {
        const option = document.createElement('option');
        option.value = country.name.common;
        option.text = country.name.common;
        select.appendChild(option);
    });
}

carregarPaises();