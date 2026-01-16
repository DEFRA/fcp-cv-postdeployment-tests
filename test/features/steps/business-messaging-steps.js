import { createBdd } from 'playwright-bdd'
import { test } from './fixtures.js'

const { Given, When, Then } = createBdd(test)

//
// ────────────────────────────────────────
// CONTACT SELECTION
// ────────────────────────────────────────
//

// Given and When
Given(
  /^I have selected the contact '(.+)'$/,
  async function ({ businessMessagingPage }, contactName) {
    businessMessagingPage.selectContact(contactName)
  }
)

// Given and When
When(/^I select a contact$/, async function ({ businessMessagingPage }) {
  businessMessagingPage.selectContact(null)
})

//
// ────────────────────────────────────────
// MESSAGE SELECTION
// ────────────────────────────────────────
//

When(
  /^I select the first message$/,
  async function ({ businessMessagingPage }) {
    businessMessagingPage.selectMessage(null)
  }
)

When(
  /^I select the message with the subject '(.+)'$/,
  async function ({ businessMessagingPage }, subject) {
    businessMessagingPage.selectMessage(subject)
  }
)

//
// ────────────────────────────────────────
// FILTERS
// ────────────────────────────────────────
//

When(
  /^I select the Date Range field as '(.+)'$/,
  async function ({ businessMessagingPage }, range) {
    // Select date range filter
    // TODO
  }
)

When(
  /^I select '(.+)' from the Read-Unread filter$/,
  async function ({ businessMessagingPage }, option) {
    // Select read/unread filter
    // TODO
  }
)

//
// ────────────────────────────────────────
// PAGE COMPONENT ASSERTIONS
// ────────────────────────────────────────
//

Then(
  /^I see the Contacts drop-down$/,
  async function ({ businessMessagingPage }) {
    // TODO
  }
)

Then(
  /^I see a disabled Date Range drop-down$/,
  async function ({ businessMessagingPage }) {
    // TODO
  }
)

Then(
  /^I see a disabled Show Read\/Unread drop-down$/,
  async function ({ businessMessagingPage }) {
    // TODO
  }
)

Then(
  /^the Date Range field becomes active with options for '(.+)'$/,
  async function ({ businessMessagingPage }, options) {
    // TODO
  }
)

Then(
  /^the Show Read\/Unread field becomes active with options for '(.+)'$/,
  async function ({ businessMessagingPage }, options) {
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
  async function ({ businessMessagingPage }) {
    // Verify structure only
    // TODO
  }
)

Then(
  /^there is a label in the right-hand pane '(.+)'$/,
  async function ({ businessMessagingPage }, label) {
    // Validate warning/notice label
    // TODO
  }
)

Then(
  /^right-hand pane updates with the following information$/,
  async function ({ businessMessagingPage }, table) {
    // Validate key/value table
    // TODO
  }
)

//
// ────────────────────────────────────────
// TABLE & DATA ASSERTIONS
// ────────────────────────────────────────
//

Then(
  /^the Contacts drop-down is empty$/,
  async function ({ businessMessagingPage }) {
    // Assert contacts dropdown empty
    // TODO
  }
)

Then(
  /^I see the the correct list of messages as follows$/,
  async function ({ businessMessagingPage }, table) {
    // Validate message list based on table data
    // TODO
  }
)

Then(
  /^the Contacts drop-down contains entries for '(.+)'$/,
  async function ({ businessMessagingPage }, names) {
    // Validate list of contacts present
    // TODO
  }
)

//
// ────────────────────────────────────────
// FIELD VALUE VALIDATION
// ────────────────────────────────────────
//

Then(
  /^the Deleted field is '(.+)'$/,
  async function ({ businessMessagingPage }, value) {
    // Validate Deleted? field value
    // TODO
  }
)
