import { createBdd } from 'playwright-bdd'
import { test } from './fixtures.js'

const { When, Then } = createBdd(test)

//
// ────────────────────────────────────────
// GENERIC INTERACTIONS
// ────────────────────────────────────────
//

When(
  /^I click the View customer button$/,
  async function ({ businessLinkedContactsPage }) {
    businessLinkedContactsPage.clickViewCustomerButton()
  }
)

When(
  /^'View Authenticate Questions' link$/,
  async function ({ businessLinkedContactsPage }) {
    businessLinkedContactsPage.clickAuthenticateLink()
  }
)

When(
  /^I select the contact with the CRN '(.+)' from the Contacts table$/,
  async function ({ businessLinkedContactsPage }, crn) {
    businessLinkedContactsPage.selectContactByCrn(crn)
  }
)

When(
  /^I select the Permission '(.+)' from the Permission table$/,
  async function ({ businessLinkedContactsPage }, permission) {
    businessLinkedContactsPage.selectPermission(permission)
  }
)

// Is this exactly the same as above?
When(
  /^I select '(.+)' from the Permissions table$/,
  async function ({ businessLinkedContactsPage }, permission) {
    businessLinkedContactsPage.selectPermission(permission)
  }
)

//
// ────────────────────────────────────────
// GENERIC ASSERTIONS
// ────────────────────────────────────────
//

Then(
  /^I see a title in bold of the first name and second name of the contact concatenated in the right-hand side pane$/,
  async function ({ businessLinkedContactsPage }) {
    businessLinkedContactsPage.checkTitleInRightPane()
  }
)

Then(
  /^I see fields for '(.+)' in the right-hand side pane$/,
  async function ({ businessLinkedContactsPage }, fields) {
    const expectedFields = fields.split(',')
    await expectedFields.forEach((text) => {
      const found = businessLinkedContactsPage.fieldExists(text)
      expect(found).toEqual(true)
    })
  }
)

Then(
  /^I see a 'View customer' button in the right-hand side pane$/,
  async function ({ businessLinkedContactsPage }) {
    businessLinkedContactsPage.viewCustomerButtonIsVisible()
  }
)

Then(
  /^I see a 'View Authenticate Questions' link in the right-hand side pane$/,
  async function ({ businessLinkedContactsPage }) {
    businessLinkedContactsPage.viewAuthenticateQuestionsLinkIsVisible()
  }
)

//
// ────────────────────────────────────────
// AUTHENTICATION SUB-SCREEN
// ────────────────────────────────────────
//

Then(
  /^I see the Contacts Authentication sub-screen$/,
  async function ({ businessLinkedContactsPage }) {
    businessLinkedContactsPage.contactsAuthenticationSubScreenIsVisible()
  }
)

Then(/^a title in bold$/, async function ({ businessLinkedContactsPage }) {
  businessLinkedContactsPage.contactsAuthenticationSubScreenTitleIsVisible()
})

Then(/^a CRN field$/, async function ({ businessLinkedContactsPage }) {
  businessLinkedContactsPage.contactsAuthenticationSubScreenCrnIsVisible()
})

Then(/^a Full Name field$/, async function ({ businessLinkedContactsPage }) {
  businessLinkedContactsPage.contactsAuthenticationSubScreenFullNameIsVisible()
})

Then(/^a Role field$/, async function ({ businessLinkedContactsPage }) {
  businessLinkedContactsPage.contactsAuthenticationSubScreenRoleIsVisible()
})

Then(
  /^a Date of Birth field$/,
  async function ({ businessLinkedContactsPage }) {
    businessLinkedContactsPage.contactsAuthenticationSubScreenDobIsVisible()
  }
)

Then(
  /^I see the Contacts Authentication sub-screen with the following information$/,
  async function ({ businessLinkedContactsPage }, table) {
    businessLinkedContactsPage.checkContactsAuthenticationSubScreen(table)
  }
)

//
// ────────────────────────────────────────
// CONTACT DETAILS & PERMISSIONS
// ────────────────────────────────────────
//

Then(
  /^the page updates to show the following information$/,
  async function ({ businessLinkedContactsPage }, table) {
    businessLinkedContactsPage.checkContactsScreen(table)
  }
)

Then(
  /^the Permission Description table updates with the following descriptions '(.+)'$/,
  async function ({ businessLinkedContactsPage }, descriptions) {
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
  async function ({ businessLinkedContactsPage }, crn) {
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
  async function ({ businessLinkedContactsPage }, table) {
    // Validate table structure
    // TODO
  }
)

// Generic reusable table step
Then(
  /^I see the following data in the (.+)$/,
  async function ({ businessLinkedContactsPage }, sectionName, table) {
    // Validate data table
    // TODO
  }
)
