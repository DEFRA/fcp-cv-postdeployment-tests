import { createBdd } from 'playwright-bdd'
import { test } from './fixtures.js'

const { Given, When, Then } = createBdd(test)

//
// ────────────────────────────────────────
// UI ASSERTIONS: RIGHT PANE
// ────────────────────────────────────────
//

Then(
  /^I see a title in bold of the name of the business in the right-hand side pane$/,
  async function ({ contactsLinkedBusinessesPage }) {
    contactsLinkedBusinessesPage.checkBusinessNameTitle()
  }
)

Then(
  /^I see fields for '(.+)' in the right-hand side pane$/,
  async function ({ contactsLinkedBusinessesPage }, fields) {
    contactsLinkedBusinessesPage.checkAllFields(fields)
  }
)

Then(
  /^I see a 'View business' button in the right-hand side pane$/,
  async function ({ contactsLinkedBusinessesPage }) {
    contactsLinkedBusinessesPage.checkViewBusinessButton()
  }
)

//
// ────────────────────────────────────────
// SELECTING BUSINESSES & PERMISSIONS
// ────────────────────────────────────────
//

When(
  /^I select the business '(.+)' from the Businesses table$/,
  async function ({ contactsLinkedBusinessesPage }, business) {
    // Select business by name
    // TODO
  }
)

Given(
  /^I have selected '(.+)' in the Businesses table$/,
  async function ({ contactsLinkedBusinessesPage }, business) {
    // Select business by name (Given variant)
    // TODO
  }
)

When(
  /^I select the Permission '(.+)' from the Permission table$/,
  async function ({ contactsLinkedBusinessesPage }, permission) {
    // Select permission
    // TODO
  }
)

When(
  /^I select '(.+)' from the Permissions table$/,
  async function ({ contactsLinkedBusinessesPage }, permission) {
    // Same as above (alternate wording)
    // TODO
  }
)

//
// ────────────────────────────────────────
// TABLE RESULT ASSERTIONS
// ────────────────────────────────────────
//

Then(
  /^I see the the correct list of businesses as follows$/,
  async function ({ contactsLinkedBusinessesPage }, table) {
    // Validate SBI & Name table results
    // TODO
  }
)

//
// ────────────────────────────────────────
// PAGE UPDATE / DATA DISPLAY
// ────────────────────────────────────────
//

Then(
  /^the page updates to show the following information$/,
  async function ({ contactsLinkedBusinessesPage }, table) {
    // Validate business info + permissions + descriptions
    // TODO
  }
)

Then(
  /^the Permission Description table updates with the following descriptions '(.+)'$/,
  async function ({ contactsLinkedBusinessesPage }, descriptions) {
    // Validate description list
    // TODO
  }
)

Then(
  /^I see the Permission Description table with data for '(.+)'$/,
  async function ({ contactsLinkedBusinessesPage }, values) {
    // Validate permission level list
    // TODO
  }
)

//
// ────────────────────────────────────────
// BUTTON ACTIONS
// ────────────────────────────────────────
//

When(
  /^I click the View Business button$/,
  async function ({ contactsLinkedBusinessesPage }) {
    // Click view business
    // TODO
  }
)

Then(
  /^I see the CRM Organisation Details page for the '(.+)' organisation$/,
  async function ({ contactsLinkedBusinessesPage }, orgName) {
    // Validate navigation
    // TODO
  }
)
