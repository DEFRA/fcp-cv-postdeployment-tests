import { createBdd } from 'playwright-bdd'
import { test } from './fixtures.js'

const { When, Then } = createBdd(test)

When(
  /^I click the 'Back to Agreements list' link$/,
  async function ({ businessAgreementDetailsPage }) {
    await businessAgreementDetailsPage.clickBackButton()
  }
)

Then(
  /^I see a header with '(.+)' as the title$/,
  async function ({ businessAgreementDetailsPage }, expectedText) {
    await businessAgreementDetailsPage.checkHeader(expectedText)
  }
)

Then(
  /^I see underneath the header the following fields '(.+)'$/,
  async function ({ businessAgreementDetailsPage }, expectedFieldList) {
    await businessAgreementDetailsPage.checkFields(expectedFieldList)
  }
)

Then(
  /^I see an option to go back to see the main screen with Agreements table$/,
  async function ({ businessAgreementDetailsPage }) {
    await businessAgreementDetailsPage.checkBackButtonExists()
  }
)

Then(
  /^I see the Agreement Details table ordered by 'Sheet', 'Parcel', 'Description', 'Payment Schedule' alphabetically ascending$/,
  async function ({ businessAgreementDetailsPage }, dataTable) {
    await businessAgreementDetailsPage.checkAgreementDetailsColumnOrdering()
  }
)

Then(
  /^The screen data for Action Area \(ha\) in the Payment Schedule selected is the amount in the JSON divided by 10,000 as it is provided in m2 but displayed in ha\.$/,
  async function ({ businessAgreementDetailsPage }) {
    await businessAgreementDetailsPage.checkActionAreaHaValues()
  }
)

Then(
  /^The screen data for Parcel Area \(ha\) in the Payment Schedule selected is the amount in the JSON divided by 10,000 as it is provided in m2 but displayed in ha\.$/,
  async function ({ businessAgreementDetailsPage }) {
    await businessAgreementDetailsPage.checkParcelAreaHaValues()
  }
)
