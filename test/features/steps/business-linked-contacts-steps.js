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
  /^I see LinkedContacts fields for '(.+)' in the right-hand side pane$/,
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
  /^the LinkedContacts page updates to show the following information$/,
  async function ({ businessLinkedContactsPage }, table) {
    await businessLinkedContactsPage.checkContactsScreen(table)
  }
)

Then(
  /^the LinkedContacts Permission Description table updates with the following descriptions '(.+)'$/,
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

When(
  /^I select the contact with the CRN '(.+)' from the Contacts table$/,
  async function ({ businessLinkedContactsPage }, crn) {
    await businessLinkedContactsPage.selectContactByCrn(crn)
  }
)

Then(
  'I see a warning {string}',
  async ({ businessLinkedContactsPage }, arg) => {
    // TODO
    // Step: Then I see a warning 'There are no linked contacts for the search criteria entered'
    // From: test/features/business-linked-contacts.feature:107:5
  }
)

Then(
  'I see the LinkedContacts Permission Description table with {string}',
  async ({ businessLinkedContactsPage }, arg) => {
    // TODO
    // Step: Then I see the LinkedContacts Permission Description table with 'View business summary, View claims, View land, features and covers, Create and edit a claim, Amend a previously submitted claim, Amend land, features and covers, Submit a claim'
    // From: test/features/business-linked-contacts.feature:149:5
  }
)
