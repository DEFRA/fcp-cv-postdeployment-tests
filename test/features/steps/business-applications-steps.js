import { createBdd } from 'playwright-bdd'
import { test } from './fixtures.js'
import { BusinessApplicationsPage } from '../page-objects/business-applications-page.js'

const { Given, Then } = createBdd(test)

// ------------------------------------------------------
// PAGE NAVIGATION
// ------------------------------------------------------

Given(/^I have selected an application with the ID '(\d+)'$/, function (appId) {
  // TODO
  BusinessApplicationsPage.checkTitle()
})

// ------------------------------------------------------
// APPLICATIONS PAGE COMPONENTS
// ------------------------------------------------------

Then(
  /^there is an Application Details pane on the right-hand pane$/,
  function () {
    // TODO
  }
)

Then(
  /^the Application Details pane has a title corresponding to the 'Application Name' field of the selected application$/,
  function () {
    // TODO
  }
)

Then(/^the Application Details pane has fields for '(.+)'$/, function (fields) {
  // TODO
})

Then(
  /^the Application Details pane has a Movement History section$/,
  function () {
    // TODO
  }
)

// Generic reusable results handler
Then(
  /^I see the the correct list of Applications as follows$/,
  function (dataTable) {
    // TODO
  }
)

// ------------------------------------------------------
// EMPTY STATE
// ------------------------------------------------------

Then(/^the Applications details pane is empty$/, function () {
  // TODO
})

// ------------------------------------------------------
// APPLICATION DETAILS DATA VALIDATION
// ------------------------------------------------------

Then(
  /^I see the correct data in the Application Details pane as follows$/,
  function (dataTable) {
    // TODO
  }
)

Then(
  /^I see the correct data in the Movements History table as follows$/,
  function (dataTable) {
    // TODO
  }
)

// ------------------------------------------------------
// ORDERING CHECKS
// ------------------------------------------------------

Then(
  /^I see the correct data in the Movements History table ordered by date\/time as follows$/,
  function (dataTable) {
    // TODO
  }
)
