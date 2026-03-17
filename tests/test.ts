import { expect, test } from '@playwright/test';

test('home page shows contact form and legal links', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByText('お問い合わせ')).toBeVisible();
	await expect(page.getByRole('link', { name: '個人情報保護方針' }).first()).toBeVisible();
	await expect(page.getByRole('link', { name: '特定商取引法に基づく表記' }).first()).toBeVisible();
});
