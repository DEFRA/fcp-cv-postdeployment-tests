import { createBdd } from 'playwright-bdd'
import { test } from './fixtures.js'

const { When, Then } = createBdd(test)

// ------------------------------------------------------
// UI Components on Agreements Page
// ------------------------------------------------------

Then(
  /^I see an Agreements table with the column headers as follows '(.+)'$/,
  function (headers) {}
)

Then(/^each Agreements table has an option to view the record$/, function () {
  // TODO
})

// ------------------------------------------------------
// Agreement Details Page Components
// ------------------------------------------------------

When(
  /^I click the 'View' link next to (?:an agreement|the agreement with reference '(\d+)')$/,
  function (ref) {}
)

Then(/^I see a header with 'Agreement Name' as the title$/, function () {})

Then(
  /^I see underneath the header the following fields '(.+)'$/,
  function (fields) {}
)

Then(
  /^I see a “payment schedules” table with the following column headers '(.+)'$/,
  function (headers) {}
)

Then(
  /^I see an option to go back to see the main screen with Agreements table$/,
  function () {}
)

// ------------------------------------------------------
// Back Navigation
// ------------------------------------------------------

When(/^I click the 'Back to Agreements list' link$/, function () {})

// Generic "correct list of Agreements" result table
Then(
  /^I see the the correct list of Agreements as follows$/,
  function (dataTable) {}
)

// ------------------------------------------------------
// Empty Agreements Case
// ------------------------------------------------------

Then(/^The agreements table is empty$/, function () {})

Then(
  /^a label is shown with the text 'We didn't find any data to show at this time'$/,
  function () {}
)

// ------------------------------------------------------
// Data Ordering & Table Result Checks
// ------------------------------------------------------

Then(
  /^I see the correct data in the Agreements table, ordered by most recent year first, as follows$/,
  function (dataTable) {}
)

// ------------------------------------------------------
// Agreement Details Table Ordering & Data Checks
// ------------------------------------------------------

Then(
  /^I see the Agreement Details table ordered by 'Sheet', 'Parcel', 'Description', 'Payment Schedule' alphabetically ascending$/,
  function (dataTable) {}
)

Then(
  /^The screen data for Action Area \(ha\) in the Payment Schedule selected is the amount in the JSON divided by 10,000 as it is provided in m2 but displayed in ha\.$/,
  function () {}
)

Then(
  /^The screen data for Parcel Area \(ha\) in the Payment Schedule selected is the amount in the JSON divided by 10,000 as it is provided in m2 but displayed in ha\.$/,
  function () {}
)
