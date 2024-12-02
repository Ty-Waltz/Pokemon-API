const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get('id');

if (pokemonId) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon not found');
            }
            return response.json();
        })
        .then(data => {
            displayDetails(data);
        })
        .catch(error => {
            document.getElementById('pokemonDetails').innerHTML = `<p class="text-danger">Failed to fetch Pokémon details. Try again later.</p>`;
        });
}

function displayDetails(data) {
    const detailsDiv = document.getElementById('pokemonDetails');
    detailsDiv.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${data.sprites.front_default}" class="card-img-top" alt="${data.name}">
            <div class="card-body">
                <h5 class="card-title">${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h5>
                <p class="card-text">ID: ${data.id}</p>
                <p class="card-text">Types: ${data.types.map(type => type.type.name).join(', ')}</p>
                <p class="card-text">Abilities: ${data.abilities.map(ability => ability.ability.name).join(', ')}</p>
                <h6>Stats:</h6>
                <ul>
                    ${data.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}
