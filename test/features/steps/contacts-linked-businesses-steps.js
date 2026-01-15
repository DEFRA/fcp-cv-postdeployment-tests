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
  async function ({ contactsLinkedBusinessesPage }, businessName) {
    contactsLinkedBusinessesPage.selectBusiness(businessName)
  }
)

Given(
  /^I have selected '(.+)' in the Businesses table$/,
  async function ({ contactsLinkedBusinessesPage }, businessName) {
    contactsLinkedBusinessesPage.selectBusiness(businessName)
  }
)

When(
  /^I select the Permission '(.+)' from the Permissions table$/,
  async function ({ contactsLinkedBusinessesPage }, permission) {
    contactsLinkedBusinessesPage.selectPermission(permission)
  }
)

//
// ────────────────────────────────────────
// TABLE RESULT ASSERTIONS
// ────────────────────────────────────────
//

Then(
  /^I see the the correct list of businesses as follows$/,
  async function ({ contactsLinkedBusinessesPage }, businessList) {
    contactsLinkedBusinessesPage.checkBusinessList(businessList)
  }
)

//
// ────────────────────────────────────────
// PAGE UPDATE / DATA DISPLAY
// ────────────────────────────────────────
//

Then(
  /^the page updates to show the following information$/,
  async function ({ contactsLinkedBusinessesPage }, expectedBusinessDetails) {
    contactsLinkedBusinessesPage.checkBusinessData(expectedBusinessDetails)
  }
)

Then(
  /^the Permission Description table updates with the following descriptions '(.+)'$/,
  async function ({ contactsLinkedBusinessesPage }, expectedDescriptions) {
    contactsLinkedBusinessesPage.checkPermissionDescriptionTable(
      expectedDescriptions
    )
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
    contactsLinkedBusinessesPage.clickViewBusinessButton()
  }
)

//
// ────────────────────────────────────────
// VALIDATION
// ────────────────────────────────────────
//

Then(
  /^I see the CRM Organisation Details page for the '(.+)' organisation$/,
  async function ({ contactsLinkedBusinessesPage }, orgName) {
    // Validate navigation
    // TODO
    // Unclear if this can be automated
  }
)
