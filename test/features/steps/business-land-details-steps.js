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

When(
  /^I select the first day of every month$/,
  function ({ businessLandDetailsPage }) {
    businessLandDetailsPage.selectFirstDayOfEachMonth()
  }
)

Then(
  /^I see a Parcel Summary with a bold header which is a concatenation of the sheet and parcel codes selected$/,
  function ({ businessLandDetailsPage }) {
    businessLandDetailsPage.checkParcelSummaryHeader(null)
  }
)

Then(
  /^I see a Parcel Summary section with a bold header '([^']+)'$/,
  function ({ businessLandDetailsPage }, expectedHeaderString) {
    businessLandDetailsPage.checkParcelSummaryHeader(expectedHeaderString)
  }
)

Then(
  /^the Parcel Summary has fields for '([^']+)'$/,
  function ({ businessLandDetailsPage }, expectedFields) {
    businessLandDetailsPage.checkParcelSummaryFields(expectedFields)
  }
)

// ------------------------------------
// DATE SELECTOR
// ------------------------------------

When(/^I select a new date$/, function ({ businessLandDetailsPage }) {
  businessLandDetailsPage.changeDate()
})

Then(/^the page refreshes the data$/, function ({ businessLandDetailsPage }) {
  businessLandDetailsPage.checkScreenDataUpdate()
})

When(
  /^I delete all the text in the Date field$/,
  function ({ businessLandDetailsPage }) {
    businessLandDetailsPage.enterDate('')
  }
)

When(
  /^I enter '([^']+)' into the date picker$/,
  function ({ businessLandDetailsPage }, dateString) {
    businessLandDetailsPage.enterDate(dateString)
  }
)

// ------------------------------------
// DATA ASSERTIONS – LAND SUMMARY & TABLES
// ------------------------------------

Then(/^no error is shown on screen$/, function ({ businessLandDetailsPage }) {
  businessLandDetailsPage.checkNoErrors()
})

Then(
  /^I see the following data in the Land Summary section$/,
  function ({ businessLandDetailsPage }, expectedFieldData) {
    businessLandDetailsPage.checkLandSummaryData(expectedFieldData)
  }
)

Then(
  /^I see the following data in the Land Summary table$/,
  function ({ businessLandDetailsPage }, expectedSummaryTable) {
    businessLandDetailsPage.checkLandSummaryTableData(expectedSummaryTable)
  }
)

Then(
  /^the Parcel Summary has field data as follows$/,
  function ({ businessLandDetailsPage }, expectedFieldData) {
    businessLandDetailsPage.checkParcelSummaryFieldData(expectedFieldData)
  }
)

Then(
  /^the Parcel Summary table has data as follows$/,
  function ({ businessLandDetailsPage }, expectedSummaryTable) {
    businessLandDetailsPage.checkParcelSummaryTableData(expectedSummaryTable)
  }
)

Then(
  /^I see the correct list of parcels in the Parcels table as follows$/,
  function ({ businessLandDetailsPage }, expectedParcelsTable) {
    businessLandDetailsPage.checkParcelTableData(expectedParcelsTable)
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
