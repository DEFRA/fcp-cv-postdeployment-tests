import { createBdd } from 'playwright-bdd'
import { test } from './fixtures.js'
import { ContactsLinkedBusinessesPage } from '../page-objects/contacts-linked-businesses-page.js'
import { ContactsAuthenticationPage } from '../page-objects/contacts-authentication-page.js'
import { BusinessMessagingPage } from '../page-objects/business-messaging-page.js'
import { BusinessLinkedContactsPage } from '../page-objects/business-linked-contacts-page.js'
import { BusinessLandDetailsPage } from '../page-objects/business-land-details-page.js'
import { BusinessCphDetailsPage } from '../page-objects/business-cph-details-page.js'
import { BusinessApplicationsPage } from '../page-objects/business-applications-page.js'
import { BusinessAgreementsPage } from '../page-objects/business-agreements-page.js'

const { Given, When, Then } = createBdd(test)

// ------------------------------------------------------
// Navigation + Page Context
// ------------------------------------------------------

Given(/^I have selected the business with SBI '(\d+)'$/, function (sbi) {
  // TODO
  ContactsLinkedBusinessesPage.checkTitle()
  ContactsAuthenticationPage.checkTitle()
  BusinessMessagingPage.checkTitle()
  BusinessLinkedContactsPage.checkTitle()
  BusinessLandDetailsPage.checkTitle()
  BusinessCphDetailsPage.checkTitle()
  BusinessApplicationsPage.checkTitle()
  BusinessAgreementsPage.checkTitle()
})

Given(/^I have selected the contact with CRN '(.+)'$/, async function (crn) {
  // TODO
})

Given(/^I am on the (.+) page$/, async function (pageName) {
  // TODO
  // Navigate to the given page
  // Contacts Linked Businesses
  // Agreements
  // Agreement Details
  // Applications
  // CPH Details
  // Land Details
  // Business Messages
  // Contacts Authentication
})

When(/^I navigate to the (.+) page$/, async function (pageName) {
  // TODO
  // Navigate to pages as above
})

Then(/^I am on the (.+) page$/, function (pageName) {
  // TODO
  // Check you are on the pageName specified
})

// ------------------------------------------------------
// KEYBOARD INTERACTION
// ------------------------------------------------------

When(/^Press the Enter key$/, function () {
  // TODO
})

//
// ────────────────────────────────────────
// SEARCH BOX ACTIONS
// ────────────────────────────────────────
//

When(/^I enter '(.+)' in the search box$/, async function (value) {
  // TODO
})

When(/^I enter a blank value in the search box$/, async function () {
  // TODO
})

Then(/^I see a Search box$/, function () {
  // TODO
})

//
// ────────────────────────────────────────
// WARNING MESSAGES
// ────────────────────────────────────────
//

Then(
  /^I see a warning message '([^']+)' under the '([^']+)' table$/,
  function (message, tableName) {
    // TODO
  }
)

//
// ────────────────────────────────────────
// TABLE HEADERS
// ────────────────────────────────────────
//

Then(/^I see the '([^']+)' table is empty$/, function () {
  // TODO
})

Then(
  /^I see an '(.+)' table with column headers as follows '(.+)'$/,
  function (tableName, headers) {
    // TODO
  }
)

Then(/^the first item of the '(.+)' table is selected$/, function () {
  // TODO
})
