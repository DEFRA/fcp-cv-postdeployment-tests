import { createBdd } from 'playwright-bdd'
import { test } from './fixtures.js'
import { BusinessLandDetailsPage } from '../page-objects/business-land-details-page.js'

const { When, Then } = createBdd(test)

// ------------------------------------
// PAGE STRUCTURE
// ------------------------------------

Then(/^I see a Date filter$/, function () {
  // TODO
  BusinessLandDetailsPage.checkTitle()
})

Then(
  /^I see a Land Summary section with a header '([^']+)'$/,
  function (header) {
    // TODO
  }
)

Then(/^the Land Summary section has fields for '([^']+)'$/, function (fields) {
  // TODO
})

Then(
  /^I see a Parcels pane with a search box and a Parcels table$/,
  function () {
    // TODO
  }
)

// ------------------------------------
// PARCEL SELECTION & SUMMARY
// ------------------------------------

When(/^I select a Parcel in the Parcels table$/, function () {
  // TODO
})

Then(
  /^I see a Parcel Summary with a bold header which is a concatenation of the sheet and parcel codes selected$/,
  function () {
    // TODO
  }
)

Then(
  /^I see a Parcel Summary section with a bold header '([^']+)'$/,
  function (header) {
    // TODO
  }
)

Then(/^the Parcel Summary has fields for '([^']+)'$/, function (fields) {
  // TODO
})

// ------------------------------------
// DATE SELECTOR
// ------------------------------------

When(/^I select a new date$/, function () {
  // TODO
})

Then(/^the page refreshes the data$/, function () {
  // TODO
})

When(/^I delete all the text in the Date field$/, function () {
  // TODO
})

When(/^I enter the following as dates$/, function (dataTable) {
  // TODO
})

When(/^I enter the date '([^']+)'$/, function (date) {
  // TODO
})

When(/^I enter '([^']+)' into the Date picker$/, function (date) {
  // TODO
})

When(/^I change the date to$/, function (dataTable) {
  // TODO
})

// ------------------------------------
// DATA ASSERTIONS – LAND SUMMARY & TABLES
// ------------------------------------

Then(
  /^I see the following data in the Land Summary section$/,
  function (dataTable) {
    // TODO
  }
)

Then(
  /^I see the following data in the Land Summary table$/,
  function (dataTable) {
    // TODO
  }
)

Then(/^I see the correct list of parcels as follows$/, function (dataTable) {
  // TODO
})

Then(
  /^I see the correct list of parcels in the Parcels table as follows$/,
  function (dataTable) {
    // TODO
  }
)

// ------------------------------------
// CLICKING A SPECIFIC PARCEL
// ------------------------------------

When(/^I click on the parcel '([^']+)'$/, function (parcelCode) {
  // TODO
})

Then(/^the Parcel Summary has field data as follows$/, function (dataTable) {
  // TODO
})

Then(/^the Parcel Summary table has data as follows$/, function (dataTable) {
  // TODO
})
