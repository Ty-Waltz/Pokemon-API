fetch('https://pokeapi.co/api/v2/type')
    .then(response => response.json())
    .then(data => {
        const types = data.results;
        const typeListDiv = document.getElementById('typeList');
        
        types.forEach(type => {
            const typeButton = document.createElement('div');
            typeButton.classList.add('col-md-4', 'my-2');
            typeButton.innerHTML = `
                <button class="btn btn-info w-100" onclick="fetchPokemonsByType('${type.name}')">
                    ${type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                </button>
            `;
            typeListDiv.appendChild(typeButton);
        });
    })
    .catch(error => console.error('Error fetching types:', error));

function fetchPokemonsByType(type) {
    fetch(`https://pokeapi.co/api/v2/type/${type}`)
        .then(response => response.json())
        .then(data => {
            displayPokemons(data.pokemon);
        })
        .catch(error => console.error('Error fetching Pokémon by type:', error));
}

function displayPokemons(pokemonList) {
    const pokemonDiv = document.getElementById('typeList');
    pokemonDiv.innerHTML = '<h2>Pokémon in this Type:</h2>';
    
    pokemonList.forEach(pokemonEntry => {
        const pokemon = pokemonEntry.pokemon;
        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('col-md-3', 'my-3');
        pokemonCard.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png" class="card-img-top" alt="${pokemon.name}">
                <div class="card-body">
                    <h5 class="card-title">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h5>
                    <a href="details.html?id=${pokemon.url.split('/')[6]}" class="btn btn-success">View Details</a>
                </div>
            </div>
        `;
        pokemonDiv.appendChild(pokemonCard);
    });
}