import { createBdd } from 'playwright-bdd'
import { test } from './fixtures.js'

const { Given, Then } = createBdd(test)

//
// ────────────────────────────────────────
// CONTACT SELECTION
// ────────────────────────────────────────
//

Given(
  /^I have selected a contact with no authentication data set$/,
  async function ({ contactsAuthenticationPage }) {
    await contactsAuthenticationPage.selectContactWithNoAuthDataSet()
  }
)

Given(
  /^I have selected a contact who is not in the authentication database$/,
  async function ({ contactsAuthenticationPage }) {
    await contactsAuthenticationPage.selectContactNotPresentInTheAuthDb()
  }
)

//
// ────────────────────────────────────────
// PAGE COMPONENT ASSERTIONS
// ────────────────────────────────────────
//

Then(
  /^I see a 'Retrieved At' field$/,
  async function ({ contactsAuthenticationPage }) {
    await contactsAuthenticationPage.checkRetrievedAtFieldExists()
  }
)

Then(
  /^the table data row is populated$/,
  async function ({ contactsAuthenticationPage }) {
    await contactsAuthenticationPage.checkAuthenticationTableIsPopulated()
  }
)

//
// ────────────────────────────────────────
// TABLE DATA ASSERTIONS
// ────────────────────────────────────────
//

Then(
  /^All table entries should be shown as '(.+)'$/,
  async function ({ contactsAuthenticationPage }, expectedString) {
    await contactsAuthenticationPage.checkAuthenticationTableCellsHaveSameValues(
      expectedString
    )
  }
)

Then(
  /^All table entries should be shown as follows$/,
  async function ({ contactsAuthenticationPage }, expectedValues) {
    await contactsAuthenticationPage.checkAuthenticationTableValues(
      expectedValues
    )
  }
)

//
// ────────────────────────────────────────
// RETRIEVED AT FIELD
// ────────────────────────────────────────
//

Then(
  /^the Retrieved At field is equal to todays date and current time$/,
  async function ({ contactsAuthenticationPage }) {
    await contactsAuthenticationPage.checkRetrievedAtValue()
  }
)

Given(
  'I have selected a contact {string}',
  async ({ contactsAuthenticationPage }, arg) => {
    // TODO
    // Step: Given I have selected a contact '1111111400'
    // From: test/features/contacts-authentication.feature:12:5
  }
)
