import { createBdd } from 'playwright-bdd'
import { test } from './fixtures.js'

const { When, Then } = createBdd(test)

// ------------------------------------
// PAGE STRUCTURE
// ------------------------------------

Then(/^I see a Date filter$/, async function ({ businessLandDetailsPage }) {
  await businessLandDetailsPage.checkDateFilter()
})

Then(
  /^I see a Land Summary section with a header '([^']+)'$/,
  async function ({ businessLandDetailsPage }, headerString) {
    await businessLandDetailsPage.checkLandSummaryHeader(headerString)
  }
)

Then(
  /^the Land Summary section has fields for '([^']+)'$/,
  async function ({ businessLandDetailsPage }, expectedFieldText) {
    await businessLandDetailsPage.checkLandSummaryFieldsExist(expectedFieldText)
  }
)

Then(
  /^I see a Parcels pane with a search box and a Parcels table$/,
  async function ({ businessLandDetailsPage }) {
    await businessLandDetailsPage.checkParcelsPane()
  }
)

// ------------------------------------
// PARCEL SELECTION & SUMMARY
// ------------------------------------

When(
  /^I select a Parcel in the Parcels table$/,
  async function ({ businessLandDetailsPage }) {
    await businessLandDetailsPage.selectParcel(null)
  }
)

When(
  /^I select the first day of every month$/,
  async function ({ businessLandDetailsPage }) {
    await businessLandDetailsPage.selectFirstDayOfEachMonth()
  }
)

Then(
  /^I see a Parcel Summary with a bold header which is a concatenation of the sheet and parcel codes selected$/,
  async function ({ businessLandDetailsPage }) {
    await businessLandDetailsPage.checkParcelSummaryHeader(null)
  }
)

Then(
  /^I see a Parcel Summary section with a bold header '([^']+)'$/,
  async function ({ businessLandDetailsPage }, expectedHeaderString) {
    await businessLandDetailsPage.checkParcelSummaryHeader(expectedHeaderString)
  }
)

Then(
  /^the Parcel Summary has fields for '([^']+)'$/,
  async function ({ businessLandDetailsPage }, expectedFields) {
    await businessLandDetailsPage.checkParcelSummaryFields(expectedFields)
  }
)

// ------------------------------------
// DATE SELECTOR
// ------------------------------------

When(/^I select a new date$/, async function ({ businessLandDetailsPage }) {
  await businessLandDetailsPage.changeDate()
})

Then(
  /^the page refreshes the data$/,
  async function ({ businessLandDetailsPage }) {
    await businessLandDetailsPage.checkScreenDataUpdate()
  }
)

When(
  /^I delete all the text in the Date field$/,
  async function ({ businessLandDetailsPage }) {
    await businessLandDetailsPage.enterDate('')
  }
)

When(
  /^I enter '([^']+)' into the date picker$/,
  async function ({ businessLandDetailsPage }, dateString) {
    await businessLandDetailsPage.enterDate(dateString)
  }
)

// ------------------------------------
// DATA ASSERTIONS – LAND SUMMARY & TABLES
// ------------------------------------

Then(
  /^no error is shown on screen$/,
  async function ({ businessLandDetailsPage }) {
    await businessLandDetailsPage.checkNoErrors()
  }
)

Then(
  /^I see the following data in the Land Summary section$/,
  async function ({ businessLandDetailsPage }, expectedFieldData) {
    await businessLandDetailsPage.checkLandSummaryData(expectedFieldData)
  }
)

Then(
  /^I see the following data in the Land Summary table$/,
  async function ({ businessLandDetailsPage }, expectedSummaryTable) {
    await businessLandDetailsPage.checkLandSummaryTableData(
      expectedSummaryTable
    )
  }
)

Then(
  /^the Parcel Summary has field data as follows$/,
  async function ({ businessLandDetailsPage }, expectedFieldData) {
    await businessLandDetailsPage.checkParcelSummaryFieldData(expectedFieldData)
  }
)

Then(
  /^the Parcel Summary table has data as follows$/,
  async function ({ businessLandDetailsPage }, expectedSummaryTable) {
    await businessLandDetailsPage.checkParcelSummaryTableData(
      expectedSummaryTable
    )
  }
)

Then(
  /^I see the correct list of parcels in the Parcels table as follows$/,
  async function ({ businessLandDetailsPage }, expectedParcelsTable) {
    await businessLandDetailsPage.checkParcelTableData(expectedParcelsTable)
  }
)

// ------------------------------------
// CLICKING A SPECIFIC PARCEL
// ------------------------------------

When(
  /^I click on the parcel '([^']+)'$/,
  async function ({ businessLandDetailsPage }, parcelCode) {
    await businessLandDetailsPage.selectParcel(parcelCode)
  }
)
