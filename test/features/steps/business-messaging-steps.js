import { createBdd } from 'playwright-bdd'
import { test } from './fixtures.js'

const { Given, When, Then } = createBdd(test)

//
// ────────────────────────────────────────
// CONTACT SELECTION
// ────────────────────────────────────────
//

When(/^I select a contact$/, async function () {
  // Select a generic contact
  // TODO
})

Given(/^I have selected a contact$/, async function () {
  // Ensure contact selected
  // TODO
})

Given(/^I have selected the contact '(.+)'$/, async function (name) {
  // Select specific contact by full name
  // TODO
})

When(/^I select the contact '(.+)'$/, async function (name) {
  // Explicit user action
  // TODO
})

//
// ────────────────────────────────────────
// MESSAGE SELECTION
// ────────────────────────────────────────
//

When(/^I select the first message$/, async function () {
  // Select first message
  // TODO
})

When(
  /^I select the message with the subject '(.+)'$/,
  async function (subject) {
    // Select message by subject
  }
)

//
// ────────────────────────────────────────
// FILTERS
// ────────────────────────────────────────
//

When(/^I select the Date Range field as '(.+)'$/, async function (range) {
  // Select date range filter
  // TODO
})

When(/^I select '(.+)' from the Read-Unread filter$/, async function (option) {
  // Select read/unread filter
  // TODO
})

//
// ────────────────────────────────────────
// PAGE COMPONENT ASSERTIONS
// ────────────────────────────────────────
//

Then(/^I see the Contacts drop-down$/, async function () {
  // TODO
})

Then(/^I see a disabled Date Range drop-down$/, async function () {
  // TODO
})

Then(/^I see a disabled Show Read\/Unread drop-down$/, async function () {
  // TODO
})

Then(
  /^the Date Range field becomes active with options for '(.+)'$/,
  async function (options) {
    // TODO
  }
)

Then(
  /^the Show Read\/Unread field becomes active with options for '(.+)'$/,
  async function (options) {
    // TODO
  }
)

//
// ────────────────────────────────────────
// RIGHT-HAND PANE ASSERTIONS
// ────────────────────────────────────────
//

Then(
  /^the right-hand pane updates with a bold title, a Date field, a Read field, a Deleted field and a Message field$/,
  async function () {
    // Verify structure only
    // TODO
  }
)

Then(
  /^there is a label in the right-hand pane '(.+)'$/,
  async function (label) {
    // Validate warning/notice label
    // TODO
  }
)

Then(
  /^right-hand pane updates with the following information$/,
  async function (table) {
    // Validate key/value table
    // TODO
  }
)

//
// ────────────────────────────────────────
// TABLE & DATA ASSERTIONS
// ────────────────────────────────────────
//

Then(/^the Contacts drop-down is empty$/, async function () {
  // Assert contacts dropdown empty
  // TODO
})

Then(
  /^I see the the correct list of messages as follows$/,
  async function (table) {
    // Validate message list based on table data
    // TODO
  }
)

Then(
  /^the Contacts drop-down contains entries for '(.+)'$/,
  async function (names) {
    // Validate list of contacts present
    // TODO
  }
)

//
// ────────────────────────────────────────
// FIELD VALUE VALIDATION
// ────────────────────────────────────────
//

Then(/^the Deleted field is '(.+)'$/, async function (value) {
  // Validate Deleted? field value
  // TODO
})
