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
  async function ({ businessMessagingPage }, rangeString) {
    businessMessagingPage.selectDateRange(rangeString)
  }
)

When(
  /^I select '(.+)' from the Read-Unread filter$/,
  async function ({ businessMessagingPage }, option) {
    businessMessagingPage.selectReadUnread(option)
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
    businessMessagingPage.checkContactsDropDown()
  }
)

Then(
  /^I see a disabled Date Range drop-down$/,
  async function ({ businessMessagingPage }) {
    businessMessagingPage.checkDateRangeDropDownDisabled()
  }
)

Then(
  /^I see a disabled Show Read\/Unread drop-down$/,
  async function ({ businessMessagingPage }) {
    businessMessagingPage.checkReadUnreadMessageDropDownDisabled()
  }
)

Then(
  /^the Date Range field becomes active with options for '(.+)'$/,
  async function ({ businessMessagingPage }, expectedOptions) {
    businessMessagingPage.checkDateRangeDropDown(expectedOptions)
  }
)

Then(
  /^the Show Read\/Unread field becomes active with options for '(.+)'$/,
  async function ({ businessMessagingPage }, expectedOptions) {
    businessMessagingPage.checkReadUnreadMessageDropDown(expectedOptions)
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
    businessMessagingPage.validateRightPaneStructure()
  }
)

Then(
  /^there is a label in the right-hand pane '(.+)'$/,
  async function ({ businessMessagingPage }, labelText) {
    businessMessagingPage.checkLabelWithTextExists(labelText)
  }
)

Then(
  /^right-hand pane updates with the following information$/,
  async function ({ businessMessagingPage }, expectedData) {
    businessMessagingPage.checkMessageDetails(expectedData)
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
    businessMessagingPage.checkContactsDropDownIsEmpty()
  }
)

Then(
  /^I see the the correct list of messages as follows$/,
  async function ({ businessMessagingPage }, table) {
    businessMessagingPage.checkMessagesList()
  }
)

Then(
  /^the Contacts drop-down contains entries for '(.+)'$/,
  async function ({ businessMessagingPage }, expectedContacts) {
    businessMessagingPage.checkContactsList(expectedContacts)
  }
)

//
// ────────────────────────────────────────
// FIELD VALUE VALIDATION
// ────────────────────────────────────────
//

Then(
  /^the Deleted field is '(.+)'$/,
  async function ({ businessMessagingPage }, stringValue) {
    businessMessagingPage.checkDeletedField(stringValue)
  }
)

Then(
  'I see the correct list of messages as follows',
  async ({ businessMessagingPage }, dataTable) => {
    // TODO
    // Step: Then I see the correct list of messages as follows
    // From: test/features/business-messaging.feature:87:5
  }
)
