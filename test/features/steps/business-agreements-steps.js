import { createBdd } from 'playwright-bdd'
import { test } from './fixtures.js'

const { When, Then } = createBdd(test)

Then(
  /^each Agreements table has an option to view the record$/,
  async function ({ businessAgreementsPage }) {
    await businessAgreementsPage.checkViewRecordIsAvailable()
  }
)

When(
  /^I click the 'View' link next to (?:an agreement|the agreement with reference '(\d+)')$/,
  async function ({ businessAgreementsPage }, ref) {
    await businessAgreementsPage.clickViewRecordForAgreement(ref)
  }
)

// Generic "correct list of Agreements" result table
Then(
  /^I see the the correct list of Agreements as follows$/,
  async function ({ businessAgreementsPage }, expectedAgreementsData) {
    await businessAgreementsPage.checkAgreementsData(
      expectedAgreementsData,
      false
    )
  }
)

Then(
  /^I see the correct data in the Agreements table, ordered by most recent year first, as follows$/,
  async function ({ businessAgreementsPage }, expectedAgreementsData) {
    await businessAgreementsPage.checkAgreementsData(
      expectedAgreementsData,
      true
    )
  }
)
