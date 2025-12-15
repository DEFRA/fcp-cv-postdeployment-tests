import { createBdd } from 'playwright-bdd'
import { test } from './fixtures.js'

const { Given, Then } = createBdd(test)

// ------------------------------------------------------
// PAGE NAVIGATION
// ------------------------------------------------------

Given(
  /^I have selected an application with the ID '(\d+)'$/,
  function (appId) {}
)

// ------------------------------------------------------
// APPLICATIONS PAGE COMPONENTS
// ------------------------------------------------------

Then(
  /^I see an Applications table with column headers for '(.+)'$/,
  function (headers) {}
)

Then(/^the first item in the Applications table is selected$/, function () {})

Then(
  /^there is an Application Details pane on the right-hand pane$/,
  function () {}
)

Then(
  /^the Application Details pane has a title corresponding to the 'Application Name' field of the selected application$/,
  function () {}
)

Then(
  /^the Application Details pane has fields for '(.+)'$/,
  function (fields) {}
)

Then(
  /^the Application Details pane has a Movement History section$/,
  function () {}
)

Then(
  /^the Movement History section has a Movements History table with column headers for '(.+)'$/,
  function (headers) {}
)

// Generic reusable results handler
Then(
  /^I see the the correct list of Applications as follows$/,
  function (dataTable) {}
)

// ------------------------------------------------------
// EMPTY STATE
// ------------------------------------------------------

Then(/^the Applications details pane is empty$/, function () {})

// ------------------------------------------------------
// APPLICATION DETAILS DATA VALIDATION
// ------------------------------------------------------

Then(
  /^I see the correct data in the Application Details pane as follows$/,
  function (dataTable) {}
)

Then(
  /^I see the correct data in the Movements History table as follows$/,
  function (dataTable) {}
)

// ------------------------------------------------------
// ORDERING CHECKS
// ------------------------------------------------------

Then(
  /^I see the correct data in the Movements History table ordered by date\/time as follows$/,
  function (dataTable) {}
)
