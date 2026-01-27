import { createBdd } from 'playwright-bdd'
import { test } from './fixtures.js'

const { When, Then } = createBdd(test)

When(
  /^I click the 'Back to Agreements list' link$/,
  function ({ businessAgreementDetailsPage }) {
    businessAgreementDetailsPage.clickBackButton()
  }
)

Then(
  /^I see underneath the header the following fields '(.+)'$/,
  function ({ businessAgreementDetailsPage }, expectedFieldList) {
    businessAgreementDetailsPage.checkFields(expectedFieldList)
  }
)

Then(
  /^I see an option to go back to see the main screen with Agreements table$/,
  function ({ businessAgreementDetailsPage }) {
    businessAgreementDetailsPage.checkBackButtonExists()
  }
)

Then(
  /^I see the Agreement Details table ordered by 'Sheet', 'Parcel', 'Description', 'Payment Schedule' alphabetically ascending$/,
  function ({ businessAgreementDetailsPage }, dataTable) {
    businessAgreementDetailsPage.checkAgreementDetailsColumnOrdering()
  }
)

Then(
  /^The screen data for Action Area \(ha\) in the Payment Schedule selected is the amount in the JSON divided by 10,000 as it is provided in m2 but displayed in ha\.$/,
  function ({ businessAgreementDetailsPage }) {
    businessAgreementDetailsPage.checkActionAreaHaValues()
  }
)

Then(
  /^The screen data for Parcel Area \(ha\) in the Payment Schedule selected is the amount in the JSON divided by 10,000 as it is provided in m2 but displayed in ha\.$/,
  function ({ businessAgreementDetailsPage }) {
    businessAgreementDetailsPage.checkParcelAreaHaValues()
  }
)
