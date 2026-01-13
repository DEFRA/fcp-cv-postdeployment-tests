import { createBdd } from 'playwright-bdd'
import { test } from './fixtures.js'

const { Then } = createBdd(test)

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
