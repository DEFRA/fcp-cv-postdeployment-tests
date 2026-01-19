import { expect } from '@playwright/test'

export default class BusinessLandDetailsPage {
  constructor(page) {
    this.page = page
    this.dateRangeTextBox = page.getByTestId('date-range-textbox')
    this.landSummaryHeaderLabel = page.getByTestId('land-summary-header-label')
    this.parcelsSearchTextbox = page.getByTestId('parcels-search-textbox')
    this.parcelsTable = page.getByTestId('parcels-table')
  }

  async checkTitle() {
    await expect(this.page).toHaveTitle('Business Land Details')
  }

  async checkDateFilter() {
    await expect(this.dateRangeTextBox).toBeVisible()
  }

  async checkLandSummaryHeader(expectedTitleText) {
    await expect(this.landSummaryHeaderLabel).toHaveText(expectedTitleText)
  }

  async checkLandSummaryFieldsExist(expectedFieldText) {
    const expectedFieldTextArray = expectedFieldText.split(',')
    await expectedFieldTextArray.forEach((text) => {
      expect(this.page.getByText(text)).toBeVisible()
    })
  }

  async checkParcelsPane() {
    await expect(this.parcelsSearchTextbox).toBeVisible()
    await expect(this.parcelsTable).toBeVisible()
  }

  async selectParcel(parcelCode) {
    const parcelCodeArray = parcelCode.split(' ')
    const sheetId = parcelCodeArray[0]
    const parcelId = parcelCodeArray[1]
    const tableRows = await this.parcelsTable.locator('tr')

    await tableRows.forEach((index) => {
      const row = tableRows[index].locator('td')
      if (row.nth(0) === sheetId && row.nth(1) === parcelId) {
        row.click()
      }
    })
  }
}
