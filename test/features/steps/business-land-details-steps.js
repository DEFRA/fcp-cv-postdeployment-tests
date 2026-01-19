import { createBdd } from 'playwright-bdd'
import { test } from './fixtures.js'

const { When, Then } = createBdd(test)

// ------------------------------------
// PAGE STRUCTURE
// ------------------------------------

Then(/^I see a Date filter$/, function ({ businessLandDetailsPage }) {
  businessLandDetailsPage.checkDateFilter()
})

Then(
  /^I see a Land Summary section with a header '([^']+)'$/,
  function ({ businessLandDetailsPage }, headerString) {
    businessLandDetailsPage.checkLandSummaryHeader(headerString)
  }
)

Then(
  /^the Land Summary section has fields for '([^']+)'$/,
  function ({ businessLandDetailsPage }, expectedFieldText) {
    businessLandDetailsPage.checkLandSummaryFieldsExist(expectedFieldText)
  }
)

Then(
  /^I see a Parcels pane with a search box and a Parcels table$/,
  function ({ businessLandDetailsPage }) {
    businessLandDetailsPage.checkParcelsPane()
  }
)

// ------------------------------------
// PARCEL SELECTION & SUMMARY
// ------------------------------------

When(
  /^I select a Parcel in the Parcels table$/,
  function ({ businessLandDetailsPage }) {
    businessLandDetailsPage.selectParcel(null)
  }
)

Then(
  /^I see a Parcel Summary with a bold header which is a concatenation of the sheet and parcel codes selected$/,
  function ({ businessLandDetailsPage }) {
    // TODO
  }
)

Then(
  /^I see a Parcel Summary section with a bold header '([^']+)'$/,
  function ({ businessLandDetailsPage }, header) {
    // TODO
  }
)

Then(
  /^the Parcel Summary has fields for '([^']+)'$/,
  function ({ businessLandDetailsPage }, fields) {
    // TODO
  }
)

// ------------------------------------
// DATE SELECTOR
// ------------------------------------

When(/^I select a new date$/, function ({ businessLandDetailsPage }) {
  // TODO
})

Then(/^the page refreshes the data$/, function ({ businessLandDetailsPage }) {
  // TODO
})

When(
  /^I delete all the text in the Date field$/,
  function ({ businessLandDetailsPage }) {
    // TODO
  }
)

When(
  /^I enter the following as dates$/,
  function ({ businessLandDetailsPage }, dataTable) {
    // TODO
  }
)

When(
  /^I enter the date '([^']+)'$/,
  function ({ businessLandDetailsPage }, date) {
    // TODO
  }
)

When(
  /^I enter '([^']+)' into the Date picker$/,
  function ({ businessLandDetailsPage }, date) {
    // TODO
  }
)

When(
  /^I change the date to$/,
  function ({ businessLandDetailsPage }, dataTable) {
    // TODO
  }
)

// ------------------------------------
// DATA ASSERTIONS – LAND SUMMARY & TABLES
// ------------------------------------

Then(
  /^I see the following data in the Land Summary section$/,
  function ({ businessLandDetailsPage }, dataTable) {
    // TODO
  }
)

Then(
  /^I see the following data in the Land Summary table$/,
  function ({ businessLandDetailsPage }, dataTable) {
    // TODO
  }
)

Then(
  /^I see the correct list of parcels as follows$/,
  function ({ businessLandDetailsPage }, dataTable) {
    // TODO
  }
)

Then(
  /^I see the correct list of parcels in the Parcels table as follows$/,
  function ({ businessLandDetailsPage }, dataTable) {
    // TODO
  }
)

// ------------------------------------
// CLICKING A SPECIFIC PARCEL
// ------------------------------------

When(
  /^I click on the parcel '([^']+)'$/,
  function ({ businessLandDetailsPage }, parcelCode) {
    businessLandDetailsPage.selectParcel(parcelCode)
  }
)

Then(
  /^the Parcel Summary has field data as follows$/,
  function ({ businessLandDetailsPage }, dataTable) {
    // TODO
  }
)

Then(
  /^the Parcel Summary table has data as follows$/,
  function ({ businessLandDetailsPage }, dataTable) {
    // TODO
  }
)
