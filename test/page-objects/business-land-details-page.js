import { expect } from '@playwright/test'

export default class BusinessLandDetailsPage {
  constructor(page) {
    this.page = page
    this.dateRangeTextBox = page.getByTestId('date-range-textbox')
    this.landSummaryTable = page.getByTestId('land-summary-table')
    this.landSummaryHeaderLabel = page.getByTestId('land-summary-header-label')
    this.parcelsSearchTextbox = page.getByTestId('parcels-search-textbox')
    this.parcelSummaryAreaHaDataLabel = page.getByTestId(
      'parcels-areaHa-datalabel'
    )
    this.parcelSummaryPendingCustomerNotifiedLandChangeDataLabel =
      page.getByTestId('parcels-pcnlc-datalabel')
    this.parcelSummaryEffectiveDateFromDataLabel = page.getByTestId(
      'parcels-effective-date-from-datalabel'
    )
    this.parcelSummaryEffectiveDateToDataLabel = page.getByTestId(
      'parcels-effective-date-to-datalabel'
    )
    this.parcelsTable = page.getByTestId('parcels-table')
    this.parcelSummaryTable = page.getByTestId('parcel-summary-table')
    this.parcelSummaryHeaderLabel = page.getByTestId(
      'parcel-summary-header-label'
    )
    this.totalNumberOfParcelsDataLabel = page.getByTestId(
      'total-number-of-parcels-datalabel'
    )
    this.totalAreaHaDataLabel = page.getByTestId('total-area-ha-datalabel')
    this.totalParcelsWithPendingCustomerNotifiedLandChangesDataLabel =
      page.getByTestId(
        'total-parcels-with-pending-customer-notified-land-changes-datalabel'
      )
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

  async checkParcelSummaryHeader(expectedHeaderString) {
    // If expected header is not specified, get sheetid and parcelid from selected row and concatenate them
    if (expectedHeaderString === null) {
      const tableRow = await this.parcelsTable
        .locator('tr')
        .locator('.selected')
      const sheetId = tableRow.nth(0)
      const parcelId = tableRow.nth(1)
      expectedHeaderString = sheetId + ' ' + parcelId
    }

    // Check the header is correct
    await expect(this.parcelSummaryHeaderLabel).toHaveText(expectedHeaderString)
    await expect(this.parcelSummaryHeaderLabel).toHaveCSS('.font-bold')
  }

  async checkParcelSummaryFields(expectedLabelTextList) {
    const expectedLabelTextArray = expectedLabelTextList.split(',')
    await expectedLabelTextArray.forEach((text) => {
      expect(this.page.getByText(text)).toBeVisible()
    })
  }

  async enterDate(dateString) {
    await this.dateRangeTextBox.fill(dateString)
  }

  async changeDate() {
    const currentDateTime = new Date()
    const oneDay = 86400000
    const dateTimeOneDayAgo = new Date(currentDateTime - oneDay)
    await this.dateRangeTextBox.fill(dateTimeOneDayAgo)
    await this.page.keyboard.press('Enter')
  }

  async checkScreenDataUpdate() {
    // TODO
    // Unclear until the app is implemented how we are going to check that the data has refreshed
  }

  async selectFirstDayOfEachMonth() {
    const firstDayArray = [
      '01/01/2025',
      '01/02/2025',
      '01/03/2025',
      '01/04/2025',
      '01/05/2025',
      '01/06/2025',
      '01/07/2025',
      '01/08/2025',
      '01/09/2025',
      '01/10/2025',
      '01/11/2025',
      '01/12/2025'
    ]
    await firstDayArray.forEach((text) => {
      this.dateRangeTextBox.fill(text)
      this.page.keyboard.press('Enter')
    })
  }

  async checkNoErrors() {
    // TODO
    // Validate that there are no errors displayed on the screen
  }

  async checkLandSummaryData(expectedFieldData) {
    /*
        | Total Number of Parcels                                   | 0     |
        | Total Area (ha)                                           | 0     |
        | Total Parcels with Pending Customer Notified Land Changes | 0     |
    */
    for (const row of expectedFieldData.hashes()) {
      switch (row.label) {
        case 'Total Number of Parcels':
          await expect(this.totalNumberOfParcelsDataLabel).toHaveText(row.value)
          break

        case 'Total Area (ha)':
          await expect(this.totalAreaHaDataLabel).toHaveText(row.value)
          break

        case 'Total Parcels with Pending Customer Notified Land Changes':
          await expect(
            this.totalParcelsWithPendingCustomerNotifiedLandChangesDataLabel
          ).toHaveText(row.value)
          break

        default:
          throw new Error(
            'Check land summary data failed - field name not recognised'
          )
      }
    }
  }

  async checkLandSummaryTableData(expectedSummaryTable) {
    /*
          | label      | value                                                  |
          | Code       | 110, 120, 130                                          |
          | Land Cover | Arable Land, Permanent grass land, Permanent crop land |
          | Area (ha)  | 0, 0, 0                                                |
    */
    let columnNumber = 0
    const actualTableRows = await this.landSummaryTable.locator('tr')

    for (const expRow of expectedSummaryTable.hashes()) {
      for (let i = 0; i < actualTableRows.length; i++) {
        const cellValue = await actualTableRows[i]
          .locator('td')
          .nth(columnNumber)
        await expect(cellValue).toEqual(expRow.value)
      }
      columnNumber++
    }
  }

  async checkParcelSummaryFieldData(expectedFieldData) {
    /*
    | Area (ha)                              | 1.027      |
    | Pending Customer Notified Land Change? | ...        |
    | Effective Date From                    | 25/07/2024 |
    | Effective Date To                      | 25/07/2024 |
    */
    for (const row of expectedFieldData.hashes()) {
      switch (row.label) {
        case 'Area (ha)':
          await expect(this.parcelSummaryAreaHaDataLabel).toHaveText(row.value)
          break

        case 'Pending Customer Notified Land Change?':
          await expect(
            this.parcelSummaryPendingCustomerNotifiedLandChangeDataLabel
          ).toHaveText(row.value)
          break

        case 'Effective Date From':
          await expect(this.parcelSummaryEffectiveDateFromDataLabel).toHaveText(
            row.value
          )
          break

        case 'Effective Date To':
          await expect(this.parcelSummaryEffectiveDateToDataLabel).toHaveText(
            row.value
          )
          break

        default:
          throw new Error(
            'Check parcel summary data failed - field name not recognised'
          )
      }
    }
  }

  async checkParcelSummaryTableData(expectedSummaryTable) {
    /*
      | Code                                   | 110, 131                         |
      | Land Cover                             | Arable Land, Permanent Grassland |
      | Area (ha)                              | 1.027, 2.541                     |
    */
    let columnNumber = 0
    const actualTableRows = await this.parcelSummaryTable.locator('tr')

    for (const expRow of expectedSummaryTable.hashes()) {
      for (let i = 0; i < actualTableRows.length; i++) {
        const cellValue = await actualTableRows[i]
          .locator('td')
          .nth(columnNumber)
        await expect(cellValue).toEqual(expRow.value)
      }
      columnNumber++
    }
  }

  async checkParcelTableData(expectedParcelTable) {
    /*
      | Sheet        | SS6627, SS6828 |
      | Parcel       | 5662, 3818     |
      | Area (ha)    | 1.027          |
      | Land Change? | No, No         |
    */
    let columnNumber = 0
    const actualTableRows = await this.parcelsTable.locator('tr')

    for (const expRow of expectedParcelTable.hashes()) {
      for (let i = 0; i < actualTableRows.length; i++) {
        const cellValue = await actualTableRows[i]
          .locator('td')
          .nth(columnNumber)
        await expect(cellValue).toEqual(expRow.value)
      }
      columnNumber++
    }
  }
}
