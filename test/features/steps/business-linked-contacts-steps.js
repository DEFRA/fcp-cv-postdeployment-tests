import { createBdd } from 'playwright-bdd'
import { test } from './fixtures.js'

const { When, Then } = createBdd(test)

//
// ────────────────────────────────────────
// INTERACTIONS
// ────────────────────────────────────────
//

When(
  /^I click the View customer button$/,
  async function ({ businessLinkedContactsPage }) {
    await businessLinkedContactsPage.clickViewCustomerButton()
  }
)

When(
  /^'View Authenticate Questions' link$/,
  async function ({ businessLinkedContactsPage }) {
    await businessLinkedContactsPage.clickAuthenticateLink()
  }
)

When(
  /^I select the contact with the CRN '(.+)' from the Contacts table$/,
  async function ({ businessLinkedContactsPage }, crn) {
    await businessLinkedContactsPage.selectContactByCrn(crn)
  }
)

// This is used for Given and When but Playwright will match either
When(
  /^I select the Permission '(.+)' from the Permission table$/,
  async function ({ businessLinkedContactsPage }, permission) {
    await businessLinkedContactsPage.selectPermission(permission)
  }
)

//
// ────────────────────────────────────────
// ASSERTIONS
// ────────────────────────────────────────
//

Then(
  /^I see a title in bold of the first name and second name of the contact concatenated in the right-hand side pane$/,
  async function ({ businessLinkedContactsPage }) {
    await businessLinkedContactsPage.checkContactNameTitle()
  }
)

Then(
  /^I see fields for '(.+)' in the right-hand side pane$/,
  async function ({ businessLinkedContactsPage }, fields) {
    await businessLinkedContactsPage.checkFields()
  }
)

Then(
  /^I see a 'View Contact' button in the right-hand side pane$/,
  async function ({ businessLinkedContactsPage }) {
    await businessLinkedContactsPage.viewContactButtonIsVisible()
  }
)

Then(
  /^I see a 'View Authenticate Questions' link in the right-hand side pane$/,
  async function ({ businessLinkedContactsPage }) {
    await businessLinkedContactsPage.viewAuthenticateQuestionsLinkIsVisible()
  }
)

Then(
  /^I see a a warning '(.+)'$/,
  async function ({ businessLinkedContactsPage }, expectedWarningMessage) {
    await businessLinkedContactsPage.checkWarningMessage(expectedWarningMessage)
  }
)

//
// ────────────────────────────────────────
// VALIDATION
// ────────────────────────────────────────
//

Then(
  /^the page updates to show the following information$/,
  async function ({ businessLinkedContactsPage }, table) {
    await businessLinkedContactsPage.checkContactsScreen(table)
  }
)

Then(
  /^the Permission Description table updates with the following descriptions '(.+)'$/,
  async function ({ businessLinkedContactsPage }, descriptions) {
    await businessLinkedContactsPage.checkPermissionDescriptionsTable(
      descriptions
    )
  }
)

Then(
  /^I see the the correct list of contacts as follows$/,
  async function ({ businessLinkedContactsPage }, table) {
    await businessLinkedContactsPage.checkContactsTable(table)
  }
)

//
// ────────────────────────────────────────
// CRM NAVIGATION
// ────────────────────────────────────────
//

Then(
  /^I see the CRM Contact Details page for the contact with the CRN '(.+)'$/,
  async function ({ businessLinkedContactsPage }, crn) {
    // Assert CRM page opened
    // Unclear if this can be done in an automated way
    // TODO
  }
)
