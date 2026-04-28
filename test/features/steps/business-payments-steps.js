import { createBdd } from 'playwright-bdd'
import { test } from './fixtures.js'

const { When, Then } = createBdd(test)

//  When
When(
  /^I type '(.+)' into the payments search box$/,
  async function ({ businessPaymentsPage }, searchText) {
    await businessPaymentsPage.enterTextIntoSearchBox(searchText)
  }
)

// Then
Then(
  /^a '(.+)' message is displayed$/,
  async function ({ businessPaymentsPage }, expectedText) {
    await businessPaymentsPage.checkMessageIsDisplayed(expectedText)
  }
)
