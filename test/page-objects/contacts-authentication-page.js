import { expect } from '@playwright/test'

export default class ContactsAuthenticationPage {
  constructor(page) {
    this.page = page
    this.retrievedAtLabel = page.getByTestId('retrieved-at-label')
    this.retrievedAtTextBox = page.getByTestId('retrieved-at-textbox')
    this.authenticationTable = page.getByTestId('authentication-table')
  }

  async checkTitle() {
    await expect(this.page).toHaveTitle('Contacts Authentication')
  }

  async selectContactWithNoAuthDataSet() {
    // TODO
    // Unclear how this will be done in the new app
  }

  async selectContactNotPresentInTheAuthDb() {
    // TODO
    // Unclear how this will be done in the new app
  }

  async checkRetrievedAtFieldExists() {
    expect(this.retrievedAtLabel).toBeVisible()
  }

  async checkAuthenticationTableIsPopulated() {
    const tableData = await this.authenticationTable.locator('td')
    await tableData.forEach((text) => {
      expect(text).not.toContainText()('')
    })
  }

  async checkAuthenticationTableCellsHaveSameValues(expectedString) {
    const tableData = await this.authenticationTable.locator('td')
    await tableData.forEach((text) => {
      expect(text).toEqual(expectedString)
    })
  }

  async checkAuthenticationTableValues(expectedTableData) {
    /*
          | Memorable Date  | 09/11/2024                |
          | Memorable Event | claro                     |
          | Memorable Place | Castle Treutel            |
          | Updated Date    | 2024-12-31T09:58:05.370Z  |
    */

    for (const row of expectedTableData.hashes()) {
      // For any values that are embedded in the authentication table, work out the column position
      let columnPosition = null
      if (row.label === 'Memorable Date') columnPosition = 0
      else if (row.label === 'Memorable Event') columnPosition = 1
      else if (row.label === 'Memorable Place') columnPosition = 2
      else if (row.label === 'Updated Date') columnPosition = 3

      const tableData = await this.authenticationTable
        .locator('tr > td')
        .nth(columnPosition)
      expect(tableData).toHaveText(row.value)
    }
  }

  async checkRetrievedAtValue() {
    const dateTimeShown = Date.parse(this.retrievedAtTextBox.innerText())
    const currentDateTime = new Date()
    const dateTimeOneMinAgo = new Date(currentDateTime - 60000)

    expect(
      dateTimeShown < currentDateTime && dateTimeShown > dateTimeOneMinAgo
    ).toBeTruthy()
  }
}
