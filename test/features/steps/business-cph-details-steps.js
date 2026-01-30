import { createBdd } from 'playwright-bdd'
import { test } from './fixtures.js'
const { When, Then } = createBdd(test)

// -------------------------------
// TABLE & DETAILS PANE EXPECTATIONS
// -------------------------------

Then(
  /^I see a CPH Details pane on the right with a title '(.+)' concatenated with with CPH number$/,
  function ({ businessCphDetailsPage }, titlePrefix) {
    businessCphDetailsPage.checkDetailsPaneTitle(titlePrefix)
  }
)

Then(
  /^the CPH Details pane has fields for '(.+)'$/,
  function ({ businessCphDetailsPage }, expectedFields) {
    businessCphDetailsPage.checkDetailsPaneFields(expectedFields)
  }
)

Then(
  /^the CPH Details pane has the field data populated$/,
  function ({ businessCphDetailsPage }) {
    businessCphDetailsPage.checkDetailsPaneFieldsArePopulated()
  }
)

Then(
  /^I see the the correct list of CPHs as follows$/,
  function ({ businessCphDetailsPage }, expectedCphData) {
    businessCphDetailsPage.checkCphListData(expectedCphData, false)
  }
)

Then(
  /^I see the correctly ordered list of CPH's as follows$/,
  function ({ businessCphDetailsPage }, expectedCphData) {
    businessCphDetailsPage.checkCphListData(expectedCphData, true)
  }
)

When(
  /^When I select a new CPH from the CPH Table$/,
  function ({ businessCphDetailsPage }) {
    businessCphDetailsPage.selectCph(null)
  }
)

When(
  /^I select the CPH '([^']+)'$/,
  function ({ businessCphDetailsPage }, cphNumber) {
    businessCphDetailsPage.selectCph(cphNumber)
  }
)

Then(
  /^the details in the right-hand side pane update$/,
  function ({ businessCphDetailsPage }) {
    // TODO
    // Unclear how best to do this
  }
)

Then(
  /^I see an empty CPH Details pane$/,
  function ({ businessCphDetailsPage }) {
    businessCphDetailsPage.checkDetailsPaneIsEmpty()
  }
)

Then(
  /^then I see the following CPH Details$/,
  function ({ businessCphDetailsPage }, expectedCphDetails) {
    businessCphDetailsPage.checkCphFieldData(expectedCphDetails)
  }
)

Then(
  /^I see the CPH Details pane has fields for '([^']+)'$/,
  function ({ businessCphDetailsPage }, expectedFields) {
    businessCphDetailsPage.checkCphFieldsExist(expectedFields)
  }
)
