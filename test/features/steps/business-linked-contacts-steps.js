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
})

When(/^'View Authenticate Questions' link$/, async function () {
  // Click authenticate link
})

When(
  /^I select the contact with the CRN '(.+)' from the Contacts table$/,
  async function (crn) {
    // Select contact by CRN
  }
)

When(
  /^I select the Permission '(.+)' from the Permission table$/,
  async function (permission) {
    // Select permission
  }
)

When(
  /^I select '(.+)' from the Permissions table$/,
  async function (permission) {
    // Same as above, reused
  }
)

//
// ────────────────────────────────────────
// GENERIC ASSERTIONS
// ────────────────────────────────────────
//

Then(/^the first item of the Contacts table is selected$/, async function () {})

Then(
  /^I see a title in bold of the first name and second name of the contact concatenated in the right-hand side pane$/,
  async function () {}
)

Then(
  /^I see fields for '(.+)' in the right-hand side pane$/,
  async function (fields) {}
)

Then(
  /^I see a 'View customer' button in the right-hand side pane$/,
  async function () {}
)

Then(
  /^I see a 'View Authenticate Questions' link in the right-hand side pane$/,
  async function () {}
)

Then(
  /^the first item of the Permission table is selected$/,
  async function () {}
)
Then(
  /^the first item of the Permission Description table is selected$/,
  async function () {}
)

//
// ────────────────────────────────────────
// AUTHENTICATION SUB-SCREEN
// ────────────────────────────────────────
//

Then(/^I see the Contacts Authentication sub-screen$/, async function () {})

Then(/^a title in bold$/, async function () {})

Then(/^a CRN field$/, async function () {})

Then(/^a Full Name field$/, async function () {})

Then(/^a Role field$/, async function () {})

Then(/^a Date of Birth field$/, async function () {})

Then(
  /^I see the Contacts Authentication sub-screen with the following information$/,
  async function (table) {
    // Validate table
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
  }
)

Then(
  /^the Permission Description table updates with the following descriptions '(.+)'$/,
  async function (descriptions) {
    // Validate descriptions
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
  }
)

// Generic reusable table step
Then(
  /^I see the following data in the (.+)$/,
  async function (sectionName, table) {
    // Validate data table
  }
)
