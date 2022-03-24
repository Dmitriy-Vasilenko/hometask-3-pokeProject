import { fillPokemonCard, getPokemonByNameOrId } from './const.js';

const btn = document.querySelector('#add');

const pokemonLocal = localStorage.getItem('')

const poke = localStorage.getItem('poke');
const cardList = document.querySelector('.card-list');

btn.addEventListener('click', async (event) => {
    const randomId = Math.floor(Math.random() * 100);
    try {
        const pokemon = await getPokemonByNameOrId(randomId);
        fillPokemonCard(pokemon);
        localStorage.setItem('poke', JSON.stringify(cardList.innerHTML));
    } catch (error) {
        alert(error.message);
    }
});

if (poke) {
    cardList.innerHTML = JSON.parse(poke);
}
