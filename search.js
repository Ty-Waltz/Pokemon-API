document.getElementById('searchBtn').addEventListener('click', function () {
    const query = document.getElementById('pokemonInput').value.toLowerCase();
    if (query) {
        fetchPokemon(query);
    }
});

function fetchPokemon(query) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon not found');
            }
            return response.json();
        })
        .then(data => {
            displayPokemon(data);
        })
        .catch(error => {
            document.getElementById('pokemonResult').innerHTML = `<p class="text-danger">Pokémon not found. Try again.</p>`;
        });
}

function displayPokemon(data) {
    const resultDiv = document.getElementById('pokemonResult');
    resultDiv.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${data.sprites.front_default}" class="card-img-top" alt="${data.name}">
            <div class="card-body">
                <h5 class="card-title">${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h5>
                <p class="card-text">ID: ${data.id}</p>
                <p class="card-text">Types: ${data.types.map(type => type.type.name).join(', ')}</p>
                <a href="details.html?id=${data.id}" class="btn btn-success">View Details</a>
            </div>
        </div>
    `;
}