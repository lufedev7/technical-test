// @ts-check
import { test, expect } from '@playwright/test'
import { CAT_PREFIXER_IMG } from '../src/services/config';
const LOCALHOST_URL = 'http://localhost:5173/'
test('app shows ramdon fact and image', async ({page})=>{
  await page.goto(LOCALHOST_URL)
  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')
  const textContent = await text.textContent()
  const imageUrl = await image.getAttribute('src')
  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageUrl?.startsWith(CAT_PREFIXER_IMG)).toBeTruthy()
})