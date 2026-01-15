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
    contactsAuthenticationPage.selectContactWithNoAuthDataSet()
  }
)

Given(
  /^I have selected a contact who is not in the authentication database$/,
  async function ({ contactsAuthenticationPage }) {
    contactsAuthenticationPage.selectContactNotPresentInTheAuthDb()
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
    contactsAuthenticationPage.checkRetrievedAtFieldExists()
  }
)

Then(
  /^the table data row is populated$/,
  async function ({ contactsAuthenticationPage }) {
    contactsAuthenticationPage.checkAuthenticationTableIsPopulated()
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
    contactsAuthenticationPage.checkAuthenticationTableCellsHaveSameValues(
      expectedString
    )
  }
)

Then(
  /^All table entries should be shown as follows$/,
  async function ({ contactsAuthenticationPage }, expectedValues) {
    contactsAuthenticationPage.checkAuthenticationTableValues(expectedValues)
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
    contactsAuthenticationPage.checkRetrievedAtValue()
  }
)
