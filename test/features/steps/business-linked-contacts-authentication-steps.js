import { createBdd } from 'playwright-bdd'
import { test } from './fixtures.js'

const { Then } = createBdd(test)

Then(
  /^I see the Contacts Authentication sub-screen$/,
  async function ({ businessLinkedContactsAuthenticationPage }) {
    businessLinkedContactsAuthenticationPage.checkTitle()
  }
)

Then(
  /^a title in bold$/,
  async function ({ businessLinkedContactsAuthenticationPage }) {
    businessLinkedContactsAuthenticationPage.contactsAuthenticationSubScreenTitleIsVisible()
  }
)

Then(
  /^a CRN field$/,
  async function ({ businessLinkedContactsAuthenticationPage }) {
    businessLinkedContactsAuthenticationPage.contactsAuthenticationSubScreenCrnIsVisible()
  }
)

Then(
  /^a Full Name field$/,
  async function ({ businessLinkedContactsAuthenticationPage }) {
    businessLinkedContactsAuthenticationPage.contactsAuthenticationSubScreenFullNameIsVisible()
  }
)

Then(
  /^a Role field$/,
  async function ({ businessLinkedContactsAuthenticationPage }) {
    businessLinkedContactsAuthenticationPage.contactsAuthenticationSubScreenRoleIsVisible()
  }
)

Then(
  /^a Date of Birth field$/,
  async function ({ businessLinkedContactsAuthenticationPage }) {
    businessLinkedContactsAuthenticationPage.contactsAuthenticationSubScreenDobIsVisible()
  }
)

Then(
  /^I see the Contacts Authentication sub-screen with the following information$/,
  async function ({ businessLinkedContactsAuthenticationPage }, table) {
    businessLinkedContactsAuthenticationPage.checkContactsAuthenticationSubScreen(
      table
    )
  }
)
