import { test, expect } from '@playwright/test'

test('example test', async ({ page }) => {
  await page.goto('/example')
  await expect(page.locator('p')).toHaveText('0')
})