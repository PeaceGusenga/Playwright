const { test, expect } = require('@playwright/test');
const fetch = require('node-fetch');

test.describe('PokeAPI Tests', () => {
  test('Get Pokemon List', async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const pokemonList = await response.json();
    expect(response.ok).toBe(true);
    expect(pokemonList.results).toBeDefined();
    expect(pokemonList.results.length).toBeGreaterThan(0);
  });

  test('Get Pokemon by ID', async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    const pokemon = await response.json();
    expect(response.ok).toBe(true);
    expect(pokemon.name).toBe('bulbasaur');
  });

  test('Get Pokemon by Name', async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur');
    const pokemon = await response.json();
    expect(response.ok).toBe(true);
    expect(pokemon.id).toBe(1);
  });
});
