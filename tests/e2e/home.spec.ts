import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Авто14|Автосервис/);
});

test('has heading', async ({ page }) => {
    await page.goto('/');

    // Expects page to have a heading with the name of Installation.
    await expect(page.locator('h1')).toBeVisible();
});

test('check reviews section', async ({ page }) => {
    await page.goto('/');

    // Check if reviews section exists
    const reviews = page.locator('#reviews');
    await expect(reviews).toBeVisible();

    // Check for specific text from reviews
    await expect(page.getByText('Отзывы')).toBeVisible();
});
