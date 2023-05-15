const { test, expect } = require('@playwright/test');
const axios = require('axios');

test.describe('SWAPI API', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://swapi.dev/documentation');
  });

  test('should retrieve the people list', async () => {
    const response = await axios.get('https://swapi.dev/api/people/');
    expect(response.status()).toBe(200);
    expect(response.data.count).toBeGreaterThan(0);
    expect(response.data.results).not.toBeNull();
  });

  test('should retrieve a specific person', async () => {
    const response = await axios.get('https://swapi.dev/api/people/1/');
    expect(response.status()).toBe(200);
    expect(response.data.name).toBe('Luke Skywalker');
  });

  test('should retrieve the planets list', async () => {
    const response = await axios.get('https://swapi.dev/api/planets/');
    expect(response.status()).toBe(200);
    expect(response.data.count).toBeGreaterThan(0);
    expect(response.data.results).not.toBeNull();
  });

  test('should retrieve a specific planet', async () => {
    const response = await axios.get('https://swapi.dev/api/planets/1/');
    expect(response.status()).toBe(200);
    expect(response.data.name).toBe('Tatooine');
  });

  test('should retrieve the films list', async () => {
    const response = await axios.get('https://swapi.dev/api/films/');
    expect(response.status()).toBe(200);
    expect(response.data.count).toBeGreaterThan(0);
    expect(response.data.results).not.toBeNull();
  });

  test('should retrieve a specific film', async () => {
    const response = await axios.get('https://swapi.dev/api/films/1/');
    expect(response.status()).toBe(200);
    expect(response.data.title).toBe('A New Hope');
  });
});
