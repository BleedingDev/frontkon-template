import { expect, test } from '@playwright/test';

test.describe('Home page', () => {
  test('loads and shows hero heading', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Rsbuild/i);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
      'Rsbuild with React',
    );
    await expect(
      page.getByText('Start building amazing things with Rsbuild.'),
    ).toBeVisible();
  });
});
