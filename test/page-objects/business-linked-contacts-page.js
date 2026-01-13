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
    this.authenticateLink = page.getByTestId('authenticate-link')
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

  async clickAuthenticateLink() {
    await this.authenticateLink.click()
  }

  async checkContactsAuthenticationSubScreen(table) {
    /*
      EXAMPLE: table.hashes() returns:
      [
        { label: 'Full Name', value: 'Mr Merl Elody Kemmer' },
        { label: 'Role', value: 'Business Partner' }
        ...
      ]
    */

    for (const row of table.hashes()) {
      await expect(this.page.getByLabel(row.label)).toBeVisible()
      await expect(this.page.getByLabel(row.label + '-box')).toHaveText(
        row.value
      )
    }
  }

  async checkContactsScreen(expectedTableData) {
    /*
      EXAMPLE: table.hashes() returns:
      [
        { label: 'CRN', value: '1103020285' },
        { label: 'Role', value: 'Business Partner' }
        ...
      ]
    */

    for (const row of expectedTableData.hashes()) {
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

  async checkPermissionDescriptionsTable(expectedData) {
    const expectedText = expectedData.split(',')
    const myTable = await this.page.getByTestId(
      'permissions-descriptions-table'
    )
    const tableData = await myTable.locator('td')
    await tableData.forEach((text, index) => {
      expect(text).toEqual(expectedText[index])
    })
  }

  async checkContactsTable(expectedTableData) {
    /*
      EXAMPLE: table.hashes() returns:
      [
        { label: 'CRN', value: '1103020285,1103969349' },
        { label: 'First Name', value: 'Merl,Velma' }
        { label: 'Last Name', value: 'Kemmer,Deckow' }
      ]
    */

    for (const row of expectedTableData.hashes()) {
      const expectedText = row.value.split(',')
      const myTable = await this.page.getByTestId(row.label + '-table')
      const tableData = await myTable.locator('td')
      await tableData.forEach((text, index) => {
        expect(text).toEqual(expectedText[index])
      })
    }
  }

  async checkContactNameTitle() {
    await expect(this.businessNameLabel).toBeVisible()
    await expect(this.businessNameLabel).toHaveCSS('.font-bold')
  }

  async checkFields(expectedFields) {
    const expectedFieldsArray = expectedFields.split(',')
    await expectedFieldsArray.forEach((name) => {
      expect(this.page.getByTestId(name)).toBeVisible()
    })
  }

  async viewAuthenticateQuestionsLinkIsVisible() {
    expect(this.authenticateLink).toBeVisible()
  }

  async viewCustomerButtonIsVisible() {
    expect(this.viewCustomerButton).toBeVisible()
  }

  async selectContactByCrn(crn) {
    // TODO
  }

  async selectPermission() {
    // TODO
  }
}
