import { test as setup } from '@playwright/test'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const authFile = path.join(__dirname, './playwright/.auth/user.json')

setup('authenticate', async ({ page }) => {
  // Authentication steps
  await page.goto('https://login.microsoftonline.com/')

  await page.getByRole('heading', { name: 'Sign in' }).click()
  await page
    .getByPlaceholder('Email, phone, or Skype')
    .fill(process.env.MS_EMAIL)
  await page.getByRole('button', { name: 'Next' }).click()

  await page.getByPlaceholder('Password').fill(process.env.MS_PW)
  await page.getByRole('button', { name: 'Sign in' }).click()
  await page.getByLabel("Don't show this again").check()
  await page.getByRole('button', { name: 'Yes' }).click()

  await page.context().storageState({ path: authFile })
})
