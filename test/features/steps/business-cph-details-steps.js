import { createBdd } from 'playwright-bdd'
import { test } from './fixtures.js'
const { When, Then } = createBdd(test)

// -------------------------------
// TABLE & DETAILS PANE EXPECTATIONS
// -------------------------------

Then(
  /^I see a CPH Details pane on the right with a title '(.+)' concatenated with with CPH number$/,
  async function ({ businessCphDetailsPage }, titlePrefix) {
    await businessCphDetailsPage.checkDetailsPaneTitle(titlePrefix)
  }
)

Then(
  /^the CPH Details pane has fields for '(.+)'$/,
  async function ({ businessCphDetailsPage }, expectedFields) {
    await businessCphDetailsPage.checkDetailsPaneFields(expectedFields)
  }
)

Then(
  /^the CPH Details pane has the field data populated$/,
  async function ({ businessCphDetailsPage }) {
    await businessCphDetailsPage.checkDetailsPaneFieldsArePopulated()
  }
)

Then(
  /^I see the the correct list of CPHs as follows$/,
  async function ({ businessCphDetailsPage }, expectedCphData) {
    await businessCphDetailsPage.checkCphListData(expectedCphData, false)
  }
)

Then(
  /^I see the correctly ordered list of CPH's as follows$/,
  async function ({ businessCphDetailsPage }, expectedCphData) {
    await businessCphDetailsPage.checkCphListData(expectedCphData, true)
  }
)

When(
  /^When I select a new CPH from the CPH Table$/,
  async function ({ businessCphDetailsPage }) {
    await businessCphDetailsPage.selectCph(null)
  }
)

When(
  /^I select the CPH '([^']+)'$/,
  async function ({ businessCphDetailsPage }, cphNumber) {
    await businessCphDetailsPage.selectCph(cphNumber)
  }
)

Then(
  /^the details in the right-hand side pane update$/,
  async function ({ businessCphDetailsPage }) {
    // TODO
    // Unclear how best to do this
  }
)

Then(
  /^I see an empty CPH Details pane$/,
  async function ({ businessCphDetailsPage }) {
    await businessCphDetailsPage.checkDetailsPaneIsEmpty()
  }
)

Then(
  /^then I see the following CPH Details$/,
  async function ({ businessCphDetailsPage }, expectedCphDetails) {
    await businessCphDetailsPage.checkCphFieldData(expectedCphDetails)
  }
)

Then(
  /^I see the CPH Details pane has fields for '([^']+)'$/,
  async function ({ businessCphDetailsPage }, expectedFields) {
    await businessCphDetailsPage.checkCphFieldsExist(expectedFields)
  }
)

Then(
  'I see a CPH Details pane on the right with a title {string} concatenated with CPH number',
  async ({ businessCphDetailsPage }, title) => {
    // TODO
    // Step: And I see a CPH Details pane on the right with a title 'CPH Number: ' concatenated with CPH number
    // From: test/features/business-cph-details.feature:9:5
  }
)

Then(
  'I see the the correctly ordered list of CPHs as follows',
  async ({ businessCphDetailsPage }, dataTable) => {
    // TODO
    // Step: Then I see the the correctly ordered list of CPHs as follows
    // From: test/features/business-cph-details.feature:103:5
  }
)
