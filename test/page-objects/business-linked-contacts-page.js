import { expect } from '@playwright/test'

export default class BusinessLinkedContactsPage {
  constructor(page) {
    this.page = page
    this.baseUrl =
      'https://fcp-cv-frontend.' +
      process.env.ENVIRONMENT +
      '.cdp-int.defra.cloud/' +
      'businessLinkedContacts'
    this.viewCustomerButton = page.getByTestId('view-customer-button')
  }

  async gotoPage() {
    await this.page.goto(this.baseUrl)
  }

  async checkTitle() {
    await expect(this.page).toHaveTitle('Business Linked Contacts')
  }

  async clickViewCustomerButton() {
    await this.viewCustomerButton.click()
  }

  async checkContactsAuthenticationSubScreen(table) {
    /*
      EXAMPLE: table.hashes() returns:
      [
        { label: 'Full Name', value: 'Mr Merl Elody Kemmer' },
        { label: 'Role', value: 'Business Partner' }
      ]
    */

    for (const row of table.hashes()) {
      await expect(this.page.getByLabel(row.label)).toBeVisible()
      await expect(this.page.getByLabel(row.label + '-box')).toHaveText(
        row.value
      )
    }
  }

  async checkContactsScreen(table) {
    /*
      EXAMPLE: table.hashes() returns:
      [
        { label: 'CRN', value: '1103020285' },
        { label: 'Role', value: 'Business Partner' }
      ]
    */

    for (const row of table.hashes()) {
      if (
        row.label === 'Permissions' ||
        row.label === 'Permissions Levels' ||
        row.label === 'Permission Descriptions'
      ) {
        const expectedText = row.value.split(',')
        const myTable = await this.page.getByTestId(row.label + '-table')
        const tableData = await myTable.locator('td')
        await tableData.forEach((text, index) => {
          expect(text).toEqual(expectedText[index])
        })
      } else {
        await expect(this.page.getByLabel(row.label)).toBeVisible()
        await expect(this.page.getByLabel(row.label + '-box')).toHaveText(
          row.value
        )
      }
    }
  }
}
