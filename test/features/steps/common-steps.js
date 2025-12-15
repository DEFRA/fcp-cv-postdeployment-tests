import { createBdd } from 'playwright-bdd'
import { test } from './fixtures.js'

const { Given, When, Then } = createBdd(test)

// ------------------------------------------------------
// Navigation + Page Context
// ------------------------------------------------------

Given(/^I have selected the business with SBI '(\d+)'$/, function (sbi) {
  // TODO
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
// WARNING MESSAGES
// ────────────────────────────────────────
//

Then(/^I see the '([^']+)' table is empty$/, function () {})
