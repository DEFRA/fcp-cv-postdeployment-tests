import { createBdd } from 'playwright-bdd'
import { test } from './fixtures.js'

const { Given, When, Then } = createBdd(test)

//
// ────────────────────────────────────────
// CONTACT SELECTION
// ────────────────────────────────────────
//

Given(
  /^I have selected a contact with no authentication data set$/,
  async function () {
    // Select a contact with no auth data
    // TODO
  }
)

Given(
  /^I have selected a contact who is not in the authentication database$/,
  async function () {
    // Select a contact not found in DB
    // TODO
  }
)

//
// ────────────────────────────────────────
// BUTTON ACTIONS
// ────────────────────────────────────────
//

When(/^I click the 'Open Authentication Record' button$/, async function () {
  // Click button
  // TODO
})

//
// ────────────────────────────────────────
// PAGE COMPONENT ASSERTIONS
// ────────────────────────────────────────
//

Then(/^I see an 'Open Authentication Record' button$/, async function () {
  // Validate button presence
  // TODO
})

Then(/^I see a 'Retrieved At' field$/, async function () {
  // Validate field presence
  // TODO
})

Then(/^the table data row is populated$/, async function () {
  // Assert non-empty row
  // TODO
})

Then(/^an 'Authentication App' web page is present$/, async function () {
  // Assert new page opened
  // TODO
})

//
// ────────────────────────────────────────
// TABLE DATA ASSERTIONS
// ────────────────────────────────────────
//

Then(/^All table entries should be shown as '(.+)'$/, async function (value) {
  // Assert all fields match value
  // TODO
})

Then(/^All table entries should be shown as follows$/, async function (table) {
  // Validate the table key/value pairs
  // TODO
})

//
// ────────────────────────────────────────
// RETRIEVED AT FIELD
// ────────────────────────────────────────
//

Then(
  /^the Retrieved At field is equal to today's date and current time$/,
  async function () {
    // Validate timestamp matches current date/time
    // TODO
  }
)
