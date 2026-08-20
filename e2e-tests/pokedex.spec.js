const { test, describe, expect } = require('@playwright/test');

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
  test('ensure navigation from the main page to the page of a particular Pokemon works', async ({ page }) => {
    await page.goto('')
    await page.waitForSelector('a:has(div:has-text("ivysaur"))')
    await page.click('a:has(div:has-text("ivysaur"))')
    await expect(page.getByText('overgrow')).toBeVisible()
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})