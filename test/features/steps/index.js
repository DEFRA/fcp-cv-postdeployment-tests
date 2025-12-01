import { createBdd } from 'playwright-bdd'
import { test } from './fixtures.js'

const { Given, When, Then } = createBdd(test)

Given('I am on home page', async ({ homePage, page }) => {
  await homePage.gotoHomePage()
})

Then('I see the correct home page title', async ({ homePage }) => {
  await homePage.checkHomePageTitle()
})

Then(
  'I see the correct documentation page title',
  async ({ documentationPage }) => {
    await documentationPage.checkTitle()
  }
)

When('I click the Documentation tab', async ({ homePage }) => {
  await homePage.clickDocumentationTab()
})

Given('State {int}', async ({ homePage }) => {})

When('State {int}', async ({ homePage }) => {})

Then('State {int}', async ({ homePage }) => {})
