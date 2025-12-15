import { createBdd } from 'playwright-bdd'
import { test } from './fixtures.js'

const { When, Then } = createBdd(test)

//
// ────────────────────────────────────────
// GENERIC INTERACTIONS
// ────────────────────────────────────────
//

When(/^I click the View customer button$/, async function () {
  // Click the button
  // TODO
})

When(/^'View Authenticate Questions' link$/, async function () {
  // Click authenticate link
  // TODO
})

When(
  /^I select the contact with the CRN '(.+)' from the Contacts table$/,
  async function (crn) {
    // Select contact by CRN
    // TODO
  }
)

When(
  /^I select the Permission '(.+)' from the Permission table$/,
  async function (permission) {
    // Select permission
    // TODO
  }
)

When(
  /^I select '(.+)' from the Permissions table$/,
  async function (permission) {
    // Same as above, reused
    // TODO
  }
)

//
// ────────────────────────────────────────
// GENERIC ASSERTIONS
// ────────────────────────────────────────
//

Then(
  /^I see a title in bold of the first name and second name of the contact concatenated in the right-hand side pane$/,
  async function () {
    // TODO
  }
)

Then(
  /^I see fields for '(.+)' in the right-hand side pane$/,
  async function (fields) {
    // TODO
  }
)

Then(
  /^I see a 'View customer' button in the right-hand side pane$/,
  async function () {
    // TODO
  }
)

Then(
  /^I see a 'View Authenticate Questions' link in the right-hand side pane$/,
  async function () {
    // TODO
  }
)

//
// ────────────────────────────────────────
// AUTHENTICATION SUB-SCREEN
// ────────────────────────────────────────
//

Then(/^I see the Contacts Authentication sub-screen$/, async function () {
  // TODO
})

Then(/^a title in bold$/, async function () {
  // TODO
})

Then(/^a CRN field$/, async function () {
  // TODO
})

Then(/^a Full Name field$/, async function () {
  // TODO
})

Then(/^a Role field$/, async function () {
  // TODO
})

Then(/^a Date of Birth field$/, async function () {
  // TODO
})

Then(
  /^I see the Contacts Authentication sub-screen with the following information$/,
  async function (table) {
    // Validate table
    // TODO
  }
)

//
// ────────────────────────────────────────
// CONTACT DETAILS & PERMISSIONS
// ────────────────────────────────────────
//

Then(
  /^the page updates to show the following information$/,
  async function (table) {
    // Validate table
    // TODO
  }
)

Then(
  /^the Permission Description table updates with the following descriptions '(.+)'$/,
  async function (descriptions) {
    // Validate descriptions
    // TODO
  }
)

//
// ────────────────────────────────────────
// CRM NAVIGATION
// ────────────────────────────────────────
//

Then(
  /^I see the CRM Contact Details page for the contact with the CRN '(.+)'$/,
  async function (crn) {
    // Assert CRM page opened
    // TODO
  }
)

//
// ────────────────────────────────────────
// SEARCH RESULTS VALIDATION
// ────────────────────────────────────────
//

Then(
  /^I see the the correct list of contacts as follows$/,
  async function (table) {
    // Validate table structure
    // TODO
  }
)

// Generic reusable table step
Then(
  /^I see the following data in the (.+)$/,
  async function (sectionName, table) {
    // Validate data table
    // TODO
  }
)
