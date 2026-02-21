import { createBdd } from 'playwright-bdd'
import { test } from './fixtures.js'
import { navigate } from '../../helpers/commonfunctions.js'
import ContactsLinkedBusinessesPage from '../../page-objects/contacts-linked-businesses-page.js'
import ContactsAuthenticationPage from '../../page-objects/contacts-authentication-page.js'
import BusinessMessagingPage from '../../page-objects/business-messaging-page.js'
import BusinessLinkedContactsPage from '../../page-objects/business-linked-contacts-page.js'
import BusinessLandDetailsPage from '../../page-objects/business-land-details-page.js'
import BusinessCphDetailsPage from '../../page-objects/business-cph-details-page.js'
import BusinessApplicationsPage from '../../page-objects/business-applications-page.js'
import BusinessAgreementsPage from '../../page-objects/business-agreements-page.js'

const { Given, When, Then } = createBdd(test)

// ------------------------------------------------------
// Navigation + Page Context
// ------------------------------------------------------

Given(
  /^I have selected the business with SBI '(\d+)'$/,
  async function ({ page }, sbi) {
    // Example - ?id=5ffbOfdd-61b9-f011-bbd2-002248a0744b&typename=account&sbi=11111111111
    const currentUrl = await page.url()
    const mainUrl = currentUrl.split('?')[0]
    // TODO - What is id and typename here?
    const newUrl =
      mainUrl +
      '?' +
      'id=5ffbOfdd-61b9-f011-bbd2-002248a0744b&typename=account&sbi=' +
      sbi
    await page.goto(newUrl)
  }
)

Given(
  /^I have selected the contact with CRN '(.+)'$/,
  async function ({ page }, crn) {
    const currentUrl = await page.url()
    const mainUrl = currentUrl.split('?')[0]
    // TODO - Need to see a full CRN example. Are id and typename even needed here?
    const newUrl =
      mainUrl +
      '?' +
      'id=5ffbOfdd-61b9-f011-bbd2-002248a0744b&typename=account&crn=' +
      crn
    await page.goto(newUrl)
  }
)

Given(/^I am logged in as user '(.+)'$/, async function ({ page }, crn) {
  // TODO
})

Given(/^I have gone to the (.+) page$/, async function ({ page }, pageName) {
  await navigate(pageName)
})

When(/^I navigate to the (.+) page$/, async function ({ page }, pageName) {
  await navigate(pageName)
})

Then(/^I am on the (.+) page$/, async function ({ page }, pageName) {
  switch (pageName) {
    case 'Contacts Linked Businesses':
      await ContactsLinkedBusinessesPage.checkTitle()
      break

    case 'Contacts Authentication':
      await ContactsAuthenticationPage.checkTitle()
      break

    case 'Business Messages':
      await BusinessMessagingPage.checkTitle()
      break

    case 'Business Linked Contacts':
      await BusinessLinkedContactsPage.checkTitle()
      break

    case 'Land Details':
      await BusinessLandDetailsPage.checkTitle()
      break

    case 'CPH Details':
      await BusinessCphDetailsPage.checkTitle()
      break

    case 'Applications':
      await BusinessApplicationsPage.checkTitle()
      break

    case 'Agreements':
      await BusinessAgreementsPage.checkTitle()
      break

    default:
      // console.log('Page check failed - page name not recognised')
      throw new Error('Page check failed - page name not recognised')
  }
})

// ------------------------------------------------------
// KEYBOARD INTERACTION
// ------------------------------------------------------

When(/^Press the Enter key$/, async function ({ page }) {
  await page.keyboard.press('Enter')
})

//
// ────────────────────────────────────────
// SEARCH BOX ACTIONS
// ────────────────────────────────────────
//

When(/^I enter '(.+)' in the search box$/, async function ({ page }, value) {
  const searchBox = await page.getByTestId('search-box')
  await searchBox.press_sequentially(value)
  await expect(searchBox).toHaveText(value)
})

When(/^I enter a blank value in the search box$/, async function ({ page }) {
  const searchBox = await page.getByTestId('search-box')
  await searchBox.fill('')
  await expect(searchBox).toHaveText('')
})

Then(/^I see a Search box$/, async function ({ page }) {
  const searchBox = await page.getByTestId('search-box')
  await expect(searchBox).toBeVisible()
})

//
// ────────────────────────────────────────
// WARNING MESSAGES
// ────────────────────────────────────────
//

Then(
  /^I see a warning message '(.+)' under the '(.+)' table$/,
  async function ({ page }, message, tableName) {
    // TODO - there may be multiple warning labels, how will we pick the correct one?
    const warningTextBox = await page.getByTestId('warning-text')
    await expect(warningTextBox).toHaveText(message)
  }
)

//
// ────────────────────────────────────────
// TABLE HEADERS
// ────────────────────────────────────────
//

Then(/^I see the '(.+)' table is empty$/, async function ({ page }, tableName) {
  const myTable = await page.getByTestId(tableName + '-table')
  await expect(myTable.locator('tr')).toHaveCount(0)
})

Then(
  /^I see an '(.+)' table with column headers as follows '(.+)'$/,
  async function ({ page }, tableName, headers) {
    const myTable = await page.getByTestId(tableName + '-table')
    const expectedText = headers.split(',')
    const tableHeader = await myTable.locator('th')
    const tableHeaderTexts = await tableHeader.allTextContents()
    await tableHeaderTexts.forEach((text, index) => {
      expect(text).toEqual(expectedText[index])
    })
  }
)

Then(
  /^the first item of the '(.+)' table is selected$/,
  async function ({ page }, tableName) {
    const myTable = await page.getByTestId(tableName + '-table')
    const tableFirstRow = await myTable.locator('tr').nth(0)

    // TODO
    // Unclear at the moment how the row will be highlighted
    await expect(tableFirstRow).toBeVisible()
  }
)
