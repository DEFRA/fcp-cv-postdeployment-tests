import { createBdd } from 'playwright-bdd'
import { test } from './fixtures.js'
const { Given, Then } = createBdd(test)

Given(
  /^I have selected an application with the ID '(\d+)'$/,
  async function ({ businessApplicationsPage }, appId) {
    await businessApplicationsPage.selectApplication(appId)
  }
)

Then(
  /^there is an Application Details pane on the right-hand pane$/,
  async function ({ businessApplicationsPage }) {
    await businessApplicationsPage.checkApplicationDetailsPaneExists()
  }
)

Then(
  /^the Application Details pane has a title corresponding to the 'Application Name' field of the selected application$/,
  async function ({ businessApplicationsPage }) {
    await businessApplicationsPage.checkApplicationDetailsPaneTitle(null)
  }
)

Then(
  /^the Application Details pane has fields for '(.+)'$/,
  async function ({ businessApplicationsPage }, expectedFields) {
    await businessApplicationsPage.checkApplicationDetailsFields(expectedFields)
  }
)

Then(
  /^the Application Details pane has a Movement History section$/,
  async function ({ businessApplicationsPage }) {
    await businessApplicationsPage.checkMovementHistorySectionExists()
  }
)

// Generic reusable results handler
Then(
  /^I see the the correct list of Applications as follows$/,
  async function ({ businessApplicationsPage }, expectedApplicationsDataList) {
    await businessApplicationsPage.checkApplicationsData(
      expectedApplicationsDataList
    )
  }
)

Then(
  /^the Applications details pane is empty$/,
  async function ({ businessApplicationsPage }) {
    await businessApplicationsPage.ApplicationDetailsPaneIsEmpty()
  }
)

Then(
  /^I see the correct data in the Application Details pane as follows$/,
  async function ({ businessApplicationsPage }, expectedApplicationData) {
    await businessApplicationsPage.checkApplicationDetailsData(
      expectedApplicationData
    )
  }
)

Then(
  /^I see the correct data in the Movements History table as follows$/,
  async function ({ businessApplicationsPage }, expectedMovementsHistoryData) {
    await businessApplicationsPage.checkMovementsHistoryData(
      expectedMovementsHistoryData,
      false
    )
  }
)

Then(
  /^I see the correct data in the Movements History table ordered by date\/time as follows$/,
  async function ({ businessApplicationsPage }, expectedMovementsHistoryData) {
    await businessApplicationsPage.checkMovementsHistoryData(
      expectedMovementsHistoryData,
      true
    )
  }
)

Then(/^I see a search box$/, async function ({ businessApplicationsPage }) {
  await businessApplicationsPage.checkSearchBox()
})

Then(
  'I see a {string} table with column headers as follows {string}',
  async ({ businessApplicationsPage }, tableName, columnHeaderList) => {
    // TODO
    return tableName + columnHeaderList
    // Step: And I see a 'Movements History' table with column headers as follows 'Date/Time, Movement, Check'
    // From: test/features/business-applications.feature:13:5
  }
)
