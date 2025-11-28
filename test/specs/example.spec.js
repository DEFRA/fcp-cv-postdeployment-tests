// @ts-check
import { test } from '@playwright/test'
import HomePage from '../page-objects/cdphomepage.js'
import DocumentationPage from '../page-objects/cdpdocumentationpage.js'

test('Home page is accessible', async ({ page }) => {
  const home = new HomePage(page)
  await home.gotoHomePage()
})

test('Documentation page is accessible', async ({ page }) => {
  const home = new HomePage(page)
  const docsPage = new DocumentationPage(page)

  await home.gotoHomePage()
  await home.clickDocumentationTab()
  await docsPage.checkTitle()
})
