import { createBdd } from 'playwright-bdd'
import { test } from './fixtures.js'
import {} from '../page-objects/business-applications-page.js'
const { Given, Then } = createBdd(test)

Given(
  /^I have selected an application with the ID '(\d+)'$/,
  function ({ businessApplicationsPage }, appId) {
    businessApplicationsPage.selectApplication(appId)
  }
)

Then(
  /^there is an Application Details pane on the right-hand pane$/,
  function ({ businessApplicationsPage }) {
    businessApplicationsPage.checkApplicationDetailsPaneExists()
  }
)

Then(
  /^the Application Details pane has a title corresponding to the 'Application Name' field of the selected application$/,
  function ({ businessApplicationsPage }) {
    businessApplicationsPage.checkApplicationDetailsPaneTitle(null)
  }
)

Then(
  /^the Application Details pane has fields for '(.+)'$/,
  function ({ businessApplicationsPage }, expectedFields) {
    businessApplicationsPage.checkApplicationDetailsFields(expectedFields)
  }
)

Then(
  /^the Application Details pane has a Movement History section$/,
  function ({ businessApplicationsPage }) {
    businessApplicationsPage.checkMovementHistorySectionExists()
  }
)

// Generic reusable results handler
Then(
  /^I see the the correct list of Applications as follows$/,
  function ({ businessApplicationsPage }, expectedApplicationsDataList) {
    businessApplicationsPage.checkApplicationsData(expectedApplicationsDataList)
  }
)

Then(
  /^the Applications details pane is empty$/,
  function ({ businessApplicationsPage }) {
    businessApplicationsPage.ApplicationDetailsPaneIsEmpty()
  }
)

Then(
  /^I see the correct data in the Application Details pane as follows$/,
  function ({ businessApplicationsPage }, expectedApplicationData) {
    businessApplicationsPage.checkApplicationDetailsData(
      expectedApplicationData
    )
  }
)

Then(
  /^I see the correct data in the Movements History table as follows$/,
  function ({ businessApplicationsPage }, expectedMovementsHistoryData) {
    businessApplicationsPage.checkMovementsHistoryData(
      expectedMovementsHistoryData,
      false
    )
  }
)

Then(
  /^I see the correct data in the Movements History table ordered by date\/time as follows$/,
  function ({ businessApplicationsPage }, expectedMovementsHistoryData) {
    businessApplicationsPage.checkMovementsHistoryData(
      expectedMovementsHistoryData,
      true
    )
  }
)
