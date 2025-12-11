import { createBdd } from 'playwright-bdd'
import { test } from './fixtures.js'

const { Given, When, Then } = createBdd(test)

//
// ────────────────────────────────────────
// UI ASSERTIONS: LEFT PANE
// ────────────────────────────────────────
//

Then(
  /^I see a Businesses table with column headers '(.+)' in a left-hand side pane$/,
  async function (headers) {
    // Validate businesses table headers
  }
)

Then(
  /^the first item of the Businesses table is selected$/,
  async function () {}
)

//
// ────────────────────────────────────────
// UI ASSERTIONS: RIGHT PANE
// ────────────────────────────────────────
//

Then(
  /^I see a title in bold of the name of the business in the right-hand side pane$/,
  async function () {}
)

Then(
  /^I see fields for '(.+)' in the right-hand side pane$/,
  async function (fields) {}
)

Then(
  /^I see a 'View business' button in the right-hand side pane$/,
  async function () {}
)

Then(
  /^I see a table with column headers for '(.+)' in the right-hand side pane$/,
  async function (headers) {
    // Validate generic table in right pane
  }
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
// SELECTING BUSINESSES & PERMISSIONS
// ────────────────────────────────────────
//

When(
  /^I select the business '(.+)' from the Businesses table$/,
  async function (business) {
    // Select business by name
  }
)

Given(
  /^I have selected '(.+)' in the Businesses table$/,
  async function (business) {
    // Select business by name (Given variant)
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
    // Same as above (alternate wording)
  }
)

//
// ────────────────────────────────────────
// TABLE RESULT ASSERTIONS
// ────────────────────────────────────────
//

Then(
  /^I see the the correct list of businesses as follows$/,
  async function (table) {
    // Validate SBI & Name table results
  }
)

Then(/^the Businesses table is empty$/, async function () {
  // Assert empty table
})

//
// ────────────────────────────────────────
// PAGE UPDATE / DATA DISPLAY
// ────────────────────────────────────────
//

Then(
  /^the page updates to show the following information$/,
  async function (table) {
    // Validate business info + permissions + descriptions
  }
)

Then(
  /^the Permission Description table updates with the following descriptions '(.+)'$/,
  async function (descriptions) {
    // Validate description list
  }
)

Then(
  /^I see the Permission Description table with '(.+)'$/,
  async function (values) {
    // Validate permission level list
  }
)

//
// ────────────────────────────────────────
// BUTTON ACTIONS
// ────────────────────────────────────────
//

When(/^I click the View Business button$/, async function () {
  // Click view business
})

Then(
  /^I see the CRM Organisation Details page for the '(.+)' organisation$/,
  async function (orgName) {
    // Validate navigation
  }
)

//
// ────────────────────────────────────────
// PERMISSION TABLE – DATA BEHAVIOUR
// ────────────────────────────────────────
//

Then(/^the Permission Description table is empty$/, async function () {
  // No permission descriptions shown
})

Then(
  /^warning message "(.+)" is shown below the Permission Description table$/,
  async function (msg) {
    // Validate warning message
  }
)
